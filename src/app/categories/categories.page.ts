import { GlobalService } from './../services/global.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Globals } from '../globals';
import { Platform, ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  apiService: ApiService;
  router: Router;
  backButtonSubscription;
  sliderOptions = {
    zoom: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pager: true,
    autoHeight: true,
  }
  constructor(
    apiService: ApiService,
    router: Router,
    private platform: Platform,
    private g: Globals,
    public toastController: ToastController,
    public global:GlobalService,
    private iab:InAppBrowser
  ) {
    console.log('User', this.global.user_info);
    this.apiService = apiService;
    this.router = router;
  }

  async logout(){
    await this.global.logout();
  }
  
  async ionViewWillEnter() {
    console.log("User", this.global.user_info);
    if(this.global.user_info != null){
      if(this.global.user_info.iduser){
        await this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) =>{
          console.log('Respuesta', resp);
        });
        await this.obtenerInformacionUser();
      }else{
        this.router.navigate(['home']);
      }
    }
    // this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
    //   navigator['app'].exitApp();
    // });
    //this.verProductos(0);
  }
  ionViewDidLeave() {
    // this.backButtonSubscription.unsubscribe();
  }

  async obtenerInformacionUser(){
    await this.apiService.getUser(this.global.user_info.iduser).toPromise().then((response:any) =>{
      if(response.success){
        this.global.user_info = response.data;
        this.global.user_info.promotions_discount = response.promotions_discount;
        this.global.user_info.promotions_freedelivery = response.promotions_freedelivery;
        this.global.user_info.promotions_freeproduct = response.promotions_freeproduct;
        this.global.user_info.anuncios = response.anuncios;
        this.global.user_info.paquetes = response.paquetes;
        for (var i = 0; i < this.global.user_info.promotions_discount.length; i++) {
          this.global.user_info.promotions_discount[i].url = "data:image/png;base64," +  this.global.user_info.promotions_discount[i].url;
          if (this.global.user_info.promotions_discount[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_discount[i]);
          }
        }
        for (var i = 0; i < this.global.user_info.promotions_freedelivery.length; i++) {
          this.global.user_info.promotions_freedelivery[i].url = "data:image/png;base64," +  this.global.user_info.promotions_freedelivery[i].url;
          if (this.global.user_info.promotions_freedelivery[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_freedelivery[i]);
          }
        }
        for (var i = 0; i < this.global.user_info.promotions_freeproduct.length; i++) {
          this.global.user_info.promotions_freeproduct[i].url = "data:image/png;base64," +  this.global.user_info.promotions_freeproduct[i].url;
          if (this.global.user_info.promotions_freeproduct[i].promotions_carrousel == 1) {
            this.global.promotions_carrousel.push(this.global.user_info.promotions_freeproduct[i]);
          }
        }
        for (var i = 0; i < this.global.user_info.anuncios.length; i++) {
          this.global.user_info.anuncios[i].imagen = "data:image/png;base64," +  this.global.user_info.anuncios[i].imagen;
        }

        for (var i = 0; i < this.global.user_info.paquetes.length; i++) {
          this.global.user_info.paquetes[i].imagen = "data:image/png;base64," +  this.global.user_info.paquetes[i].url;
        }
        this.global.setItemStorage('user_info', JSON.stringify(this.global.user_info));
      }
    }).catch(error =>{
      console.error('Error', error);
    });
  }

  verProductos(id:any) {
    this.router.navigate(['/tabs2/products', id ]);
  }

  shoppingList() {
    this.router.navigate(['finish-order']);
  }

  verPromosDisponibles(){
    this.router.navigate(['promos-disponibles']);
  }

  verPaquetesDisponibles(){
    this.router.navigate(['paquetes-disponibles']);
  }

  viewOrders() {
    if (this.g.idUser === -46) {
      this.global.showToast("Para ver los pedidos debes iniciar sesion", "danger");
    } else {
      this.router.navigate(['orders']);
    }
  }


  openWhatsapp(){
    this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
  }

  verPerfil(){
    
  }
}
