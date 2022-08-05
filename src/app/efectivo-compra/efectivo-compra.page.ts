import { ApiService } from './../services/api.service';
import { GlobalService } from './../services/global.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-efectivo-compra',
  templateUrl: './efectivo-compra.page.html',
  styleUrls: ['./efectivo-compra.page.scss'],
})
export class EfectivoCompraPage implements OnInit {

  constructor(
    private nav:NavController,
    private router:Router,
    private global:GlobalService,
    private apiService:ApiService,
    private g:Globals
  ) { }

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
        pickup = 1;
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


      this.apiService
        .createOrder(this.g.idUser, pickup, this.g.shoppingList, this.g.notes, this.g.pickUpNotes, free_delivery, discount, free_product, this.g.metodo_pago)
        .subscribe((response: any) => {
          if (response.success == '1') {
            this.g.fruits = [];
            this.g.vegetables = [];
            this.g.carnes = [];
            this.g.cremeria = [];
            this.g.otros = [];
            this.g.spices = [];
            this.g.metodo_pago = "";
            this.g.total_orden = 0;
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
