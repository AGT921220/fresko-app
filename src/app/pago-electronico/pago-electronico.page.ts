import { ApiService } from './../services/api.service';
import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Globals } from '../globals';

@Component({
  selector: 'app-pago-electronico',
  templateUrl: './pago-electronico.page.html',
  styleUrls: ['./pago-electronico.page.scss'],
})
export class PagoElectronicoPage implements OnInit {

  constructor(
    private nav:NavController,
    private global:GlobalService,
    private g:Globals,
    private api:ApiService
  ) {
    // let client_id = null;
    // client_id = this.global.getAppConfigFlag("PAYPAL_CLIENTID");
    // console.log('Client ID', client_id);
    // const script = document.createElement('script');
    // script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}&currency=MXN`;
    // document.head.appendChild(script);
   }

  ngOnInit() {
  }

  back() {
    this.nav.pop(); 
  }



  finalizar(){
    this.sendOrder();
  }

  sendOrder() {
    if (navigator.onLine) {
      let pickup = 1;
      if (this.g.horario == 'MATUTINO') {
        pickup = 0;
      } else {
        pickup = 2;
      }
      if(!this.g.notes){
        this.g.notes = '';
      }
      if (!this.g.pickUpNotes) {
        this.g.pickUpNotes = '';
      }
      let free_delivery = 0;
      let free_product = 0;
      let discount = 0;
      if(this.g.promo_seleccionada != null){
        if(this.g.promo_seleccionada.tipo == "ENVIO"){
          free_delivery = 1;
        } else if(this.g.promo_seleccionada.tipo == "DESCUENTO"){
          discount = this.g.promo_seleccionada = this.g.promo_seleccionada.discount_price;
        }
      }

      
      this.api
        .createOrder(this.g.idUser, pickup, this.g.shoppingList, this.g.notes, this.g.pickUpNotes, free_delivery, discount, free_product, this.g.metodo_pago)
        .subscribe((response: any) => {
          if (response.success == '1') {
            this.g.fruits = [];
            this.g.vegetables = [];
            this.g.carnes = [];
            this.g.cremeria = [];
            this.g.otros = [];
            this.g.spices = [];
            this.g.total_orden = 0;
            this.g.metodo_pago = "";
            this.g.shoppingList = [];
            this.g.notes = '';
            this.g.pickUpNotes = '';
            this.global.showToastAndRedirect(response.message, "/tabs/categories");
          } else {
            this.global.showToast(response.message, "danger");
          }
        });
    } else {
      this.global.showToast('No dispone de conexión a Internet', "danger");
    }
  }
}
