import { PagarStripePage } from './../pagar-stripe/pagar-stripe.page';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from './../services/global.service';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-terminar-compra',
  templateUrl: './terminar-compra.page.html',
  styleUrls: ['./terminar-compra.page.scss'],
})
export class TerminarCompraPage implements OnInit {
  @ViewChild('stripeButton', { read: ElementRef }) stripeButton: ElementRef;
  total_tarjeta:any;
  constructor(
    private nav: NavController,
    private router: Router,
    private global: GlobalService,
    private api: ApiService,
    private modalCtrl: ModalController
  ) {
    let comision = parseFloat(this.global.a_pagar.precio_final) * 0.036;
    let comision_iva = comision * 0.16;
    let a_pagar = (parseFloat(this.global.a_pagar.precio_final) + comision + comision_iva).toFixed(2);
    this.total_tarjeta = a_pagar;
  }

  async ngOnInit() {
    console.log('A Pagar', this.global.a_pagar);
    if (this.global.a_pagar == null) {
      this.back();
    }
  }



  back() {
    this.router.navigate(['tabs/categories']);
  }

  async elegirMetodoPago(tipo) {
    if (tipo == "TARJETA") {

      let colorModal = "cupertino-bottom-modal-black";
      const modal = await this.modalCtrl.create({
        component: PagarStripePage,
        componentProps: {},
        showBackdrop: true,
        backdropDismiss: true,
        mode: "ios",
        cssClass: colorModal,
        swipeToClose: true
      });
      await modal.present();
      let resp: any = await modal.onDidDismiss();
      if (resp != null) {
        if (resp.data.success) {
          let obj = {
            idorder: this.global.a_pagar.idorder,
            id_paypal: resp.data.data.id_pago,
            email: resp.data.data.card,
            nombre: "Stripe",
            subtotal: resp.data.data.pago,// this.global.a_pagar.precio_final
          }
          this.api.updatePayment(obj.idorder, obj.subtotal, obj.id_paypal, obj.email, obj.nombre).toPromise().then((response: any) => {
            if (response.success) {
              this.global.showToastAndRedirect(response.message, "/tabs/categories");
            } else {
              this.global.showToast(response.message, "danger");
            }
          });
        }
      }

    } else {
      this.router.navigate(['pago-transferencia']);
    }
  }

  async cobrarMercadoPago() {
    this.router.navigate(['mercado-pago']);
  }
}
