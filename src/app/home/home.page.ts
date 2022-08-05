import { GlobalService } from './../services/global.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Globals } from '../globals';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  telephone: string;
  password: string;
  isLoading = false;
  message: string;
  showError = false;
  backButtonSubscription;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private g: Globals,
    private platform: Platform,
    private global: GlobalService,
    private iab:InAppBrowser
  ) { }

  async ionViewWillEnter() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      navigator['app'].exitApp();
    });
  }
  ionViewDidLeave() {
    this.backButtonSubscription.unsubscribe();
  }

  async login() {
    this.global.esInvitado = false;
    if(this.telephone == ""){
      return this.global.showToast("Ingresa tu celular", "danger");
    } if(this.password == ""){
      return this.global.showToast("Ingresa tu contraseña", "danger");
    }
    this.isLoading = true;
    this.showError = false;
    await this.global.showLoading("Conectando..");
    if (navigator.onLine) {
      this.apiService.login(this.telephone, this.password).subscribe((response: any) => {
        if (response.success == 1) {
          this.telephone = "";
          this.password = "";
          this.g.idUser = response.iduser;
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
        }
        if (response.success == 1) {
          if (response.data.verificado == 0) {
            if(this.global.user_info != null){
              if(this.global.user_info.iduser){
                this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) =>{
                  console.log('Respuesta', resp);
                });
              }
            }
            this.global.dismissLoading();
            this.global.showToastAndRedirect("Es necesario que verifiques tu cuenta para poder usarla.", "verificacion-cliente", response.data);
          } else {
            this.g.idUser = response.iduser;
            this.global.setItemStorage('idUser', response.iduser);
            this.global.setItemStorage('user_info', JSON.stringify(response.data));
            this.global.setItemStorage('esInvitado', this.global.esInvitado);
            if(this.global.user_info != null){
              if(this.global.user_info.iduser){
                this.apiService.updateDevice(this.global.user_info.iduser, this.global.device_id).toPromise().then((resp) =>{
                  console.log('Respuesta', resp);
                });
              }
            }
            this.global.dismissLoading();
            this.router.navigate(['tabs/categories']);
          }
        } else {
          // this.message = response.mensaje;
          this.global.dismissLoading();
          this.global.showToast(response.mensaje, "danger");
          //this.showError = true;
        }
        this.isLoading = false;
      });
    } else {
      this.global.dismissLoading();
      this.global.showToast('No dispone de conexión a Internet', "danger");
      //this.showError = true;
    }
  }

  goToRegistro() {
    this.router.navigate(['/registro'])
  }

  goToInvitado(){
    this.global.esInvitado = true;
    this.global.setItemStorage('esInvitado', this.global.esInvitado);
    this.router.navigate(['tabs/categories']);
  }

  openWhatsapp(){
    this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
  }
}
