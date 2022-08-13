import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Globals } from 'src/app/globals';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { FinishOrderPage } from '../finish-order/finish-order.page';
import { HorarioEntregaPage } from '../horario-entrega/horario-entrega.page';

@Component({
  selector: 'app-send-order',
  templateUrl: './send-order.page.html',
  styleUrls: ['./send-order.page.scss'],
})
export class SendOrderPage implements OnInit {
  selectedRadioGroup: string;
  cash = true;
  isLoading = false;
  showError = false;
  message: string;
  pickUpNotes: string;
  toast: any;
  activated = false;
  promotions_available = [];
  subtotal = 0;
  total = 0;
  promo_seleccionada = null;
  costo_envio = 45.00;
  tipo = "send-order";
  shoppingList = [];
  totalCost = 0;
  constructor(
    private apiService: ApiService,
    private g: Globals,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private global: GlobalService,
    private nav: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

    this.selectedRadioGroup = 'M';
  }

  ionViewDidEnter() {
    this.costo_envio = parseFloat(this.global.getAppConfigFlag("COSTO_ENVIO"));
    console.log('Res', this.global.user_info);
    this.getSubtotal();
    this.checkPromos();
    this.getTotalCost();
    console.log('Promos', this.promotions_available);
  }

  getTotalCost() {
    this.totalCost = 0;
    this.shoppingList = [];
    for (let i = 0; i < this.g.fruits.length; i++) {
      if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.fruits[i]);
        this.totalCost += (this.g.fruits[i].selectedWeight / 1000) * this.g.fruits[i].price;
      }
    }
    for (let i = 0; i < this.g.vegetables.length; i++) {
      if (parseFloat(this.g.vegetables[i].kg) > 0 || parseInt(this.g.vegetables[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.vegetables[i]);
        this.totalCost += (this.g.vegetables[i].selectedWeight / 1000) * this.g.vegetables[i].price;
      }
    }

    for (let i = 0; i < this.g.spices.length; i++) {
      if (parseFloat(this.g.spices[i].kg) > 0 || parseInt(this.g.spices[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.spices[i]);
        this.totalCost += (this.g.spices[i].selectedWeight / 1000) * this.g.spices[i].price;
      }
    }

    for (let i = 0; i < this.g.carnes.length; i++) {
      if (parseFloat(this.g.carnes[i].kg) > 0 || parseInt(this.g.carnes[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.carnes[i]);
        this.totalCost += (this.g.carnes[i].selectedWeight / 1000) * this.g.carnes[i].price;
      }
    }

    for (let i = 0; i < this.g.cremeria.length; i++) {
      if (parseFloat(this.g.cremeria[i].kg) > 0 || parseInt(this.g.cremeria[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.cremeria[i]);
        this.totalCost += (this.g.cremeria[i].selectedWeight / 1000) * this.g.cremeria[i].price;
      }
    }

    for (let i = 0; i < this.g.otros.length; i++) {
      if (parseFloat(this.g.otros[i].kg) > 0 || parseInt(this.g.otros[i].pc, 10) > 0) {
        this.shoppingList.push(this.g.otros[i]);
        this.totalCost += (this.g.otros[i].selectedWeight / 1000) * this.g.otros[i].price;
      }
    }
    this.g.shoppingList = this.shoppingList;
    console.log('Shipping list', this.shoppingList);
  }

  async updatePromoSeleccionada(item, index) {
    for (let i = 0; i < this.promotions_available.length; i++) {
      if (i != index) {
        this.promotions_available[i].seleccionada = false;
      }
    }
    setTimeout(() => {
      if (this.promotions_available[index].seleccionada == false) {
        this.promotions_available[index].seleccionada = true;
      } else {
        this.promotions_available[index].seleccionada = false;
      }
      console.log('Promos Seleccionadas', this.promotions_available);
      let found = this.promotions_available.filter(x => {
        if (x.seleccionada == true) {
          return x;
        }
      });
      if (found.length >= 1) {
        this.promo_seleccionada = found[0];
      } else {
        this.promo_seleccionada = null;
      }

      // if(this.promo_seleccionada != null){
      this.getSubtotal();
      // }
    }, 200);
  }


  async carrito() {
    // this.global.finish_order_return = "send-order";
    this.router.navigate(['finish-order']);
  }

  checkPromos() {
    this.promotions_available = [];
    if (this.global.user_info.promotions_discount) {
      for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
        var promo = this.global.user_info.promotions_discount[i];
        if (parseFloat(promo.minimum_amount) <= this.subtotal) {
          promo.permitida = true;
          promo.tipo = 'DESCUENTO';
          promo.diferencia = 0;
          promo.seleccionada = false;
          this.promotions_available.push(promo);
        } else {
          promo.permitida = false;
          promo.tipo = 'DESCUENTO';
          promo.seleccionada = false;
          promo.diferencia = (promo.minimum_amount - this.subtotal).toFixed(2);
          this.promotions_available.push(promo);
        }
      }
    } if (this.global.user_info.promotions_freedelivery) {
      for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
        let exist = this.promotions_available.filter(x => {
          if (x.is_free_product == 1) {
            return x;
          }
        });
        if (exist.length == 0) {
          this.global.user_info.promotions_freedelivery[i].permitida = true;
          this.global.user_info.promotions_freedelivery[i].tipo = 'ENVIO';
          this.global.user_info.promotions_freedelivery[i].diferencia = 0;
          this.global.user_info.promotions_freedelivery[i].seleccionada = false;
          this.promotions_available.push(this.global.user_info.promotions_freedelivery[i]);
        }
      }
    } if (this.global.user_info.promotions_freeproduct) {

    }
  }

  async getSubtotal() {
    this.subtotal = 0;
    for (let i = 0; i < this.g.fruits.length; i++) {
      if (parseFloat(this.g.fruits[i].kg) > 0 || parseInt(this.g.fruits[i].pc, 10) > 0) {
        this.subtotal += (this.g.fruits[i].selectedWeight / 1000) * this.g.fruits[i].price;
      }
    }
    for (let i = 0; i < this.g.vegetables.length; i++) {
      if (parseFloat(this.g.vegetables[i].kg) > 0 || parseInt(this.g.vegetables[i].pc, 10) > 0) {
        this.subtotal += (this.g.vegetables[i].selectedWeight / 1000) * this.g.vegetables[i].price;
      }
    }

    for (let i = 0; i < this.g.spices.length; i++) {
      if (parseFloat(this.g.spices[i].kg) > 0 || parseInt(this.g.spices[i].pc, 10) > 0) {
        this.subtotal += (this.g.spices[i].selectedWeight / 1000) * this.g.spices[i].price;
      }
    }

    for (let i = 0; i < this.g.carnes.length; i++) {
      if (parseFloat(this.g.carnes[i].kg) > 0 || parseInt(this.g.carnes[i].pc, 10) > 0) {
        this.subtotal += (this.g.carnes[i].selectedWeight / 1000) * this.g.carnes[i].price;
      }
    }

    for (let i = 0; i < this.g.cremeria.length; i++) {
      if (parseFloat(this.g.cremeria[i].kg) > 0 || parseInt(this.g.cremeria[i].pc, 10) > 0) {
        this.subtotal += (this.g.cremeria[i].selectedWeight / 1000) * this.g.cremeria[i].price;
      }
    }

    for (let i = 0; i < this.g.otros.length; i++) {
      if (parseFloat(this.g.otros[i].kg) > 0 || parseInt(this.g.otros[i].pc, 10) > 0) {
        this.subtotal += (this.g.otros[i].selectedWeight / 1000) * this.g.otros[i].price;
      }
    }
    console.log('Subtotal', this.subtotal);
    this.total = 0;
    this.total = this.subtotal;
    this.total += this.costo_envio;
    if (this.promo_seleccionada != null) {
      if (this.promo_seleccionada.tipo == 'ENVIO') {
        this.total -= this.costo_envio;
      } else if (this.promo_seleccionada.tipo == 'DESCUENTO') {
        let descuento = this.subtotal * parseFloat("0." + this.promo_seleccionada.discount_price);
        this.promo_seleccionada.descuento_otorgado = descuento;
        this.total -= descuento;
      }
    }
    await this.getCommissions(this.global.user_info.iduser)
  }

  back() {
    if (this.global.finish_order == "products") {
      this.router.navigate(['/finish-order']);
    } else {
      this.router.navigate(['/tabs2/products/' + this.global.id_category]);
    }
  }

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail.value;
    if (this.selectedRadioGroup == 'P') {
      this.activated = true;
    } else {
      this.activated = false;
    }
  }

  async elegirHorario() {
    console.log('shoppingList Send Order', this.g.shoppingList);
    this.g.notes = this.pickUpNotes;
    this.g.total_orden = this.total;
    this.g.promo_seleccionada = this.promo_seleccionada;
    let obj = {
      tipo: this.tipo,
      id_category: this.global.id_category
    }
    let navigationExtras: NavigationExtras = {
      state: obj
    };
    this.router.navigate(['horario-entrega'], navigationExtras)
  }

  async getCommissions(user_id) {

    this.apiService.getReferredCommissionsByUserId(user_id)
      .subscribe((response: any) => {
        if (response.commissions.length >= 1) {
          let total = 0

          let commisionsResponse: any[] = response.commissions
          Object.entries(commisionsResponse).forEach(([key, value]) => {
            console.log(value.commission)
            total = total + parseFloat(value.commission)
          });
          this.total =this.total-total
        }

      });

      
  }
}
