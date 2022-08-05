import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { Globals } from '../globals';
import { AppVersion } from '@ionic-native/app-version/ngx';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loading: any;
  user_info = null;
  promotions = [];
  id_category = 0;
  flags = [];
  promotions_carrousel = [];
  isApp = false;
  device_id = null;
  a_pagar = null;
  finish_order = "products";
  finish_order_return = "";
  send_order_return = "";
  esInvitado = false;
  constructor(
    private toastCtrl: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private g: Globals,
    private appVersion: AppVersion,
    private alert: AlertController,
    private platform: Platform
  ) {
    if(this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }
  }

  getAppConfigFlag(flag) {
    let result = this.flags.filter(x => {
      if (x.flag == flag) {
        return x;
      }
    });
    if (result.length >= 1) {
      return result[0].value;
    } else {
      return null;
    }
  }

  async verificarVersion() {
    if (this.isApp == true) {
      let version: any = await this.getAppConfigFlag("VERSION");
      if (version != null) {
        let versionNumber = null;
        await this.appVersion.getVersionNumber().then(data => {
          versionNumber = data;
        });
        if (versionNumber != null) {
          versionNumber = versionNumber.replace('.', '').replace('.', '');
          version = version.replace('.', '').replace('.', '');
          console.log('version de db', version);
          console.log('version de configxml', versionNumber);
          if (parseInt(versionNumber) < parseInt(version)) {
            const alert = await this.alert.create({
              header: 'Alerta',
              message: 'La versión de tu aplicación esta desactualizada, dirígete a la PlayStore y actualízala',
              buttons: [{
                text: 'Aceptar',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
              ]
            });
            await alert.present();
          }
        }
      }
    }
  }

  async getCredentials() {
    await this.storage.get('user_info').then((val) => {
      if (val != null) {
        this.user_info = JSON.parse(val);
      }
    });
    await this.storage.get('esInvitado').then((val) =>{
      if(val != null){
        this.esInvitado = val;
      }
    });
    await this.storage.get('idUser').then((val) => {
      if (val != null) {
        this.g.idUser = val;
        if (this.user_info.verificado == 1) {
          this.router.navigate(['tabs/categories']);
        } else {
          this.router.navigate(['verificacion-cliente']);
        }
      }
    });
    return true;
  }

  async setItemStorage(keyName, value: any) {
    await this.storage.set(keyName, value);
    return true;
  }

  logout() {
    this.storage.set('idUser', null);
    this.storage.set('user_info', null);
    this.user_info = null;
    this.router.navigate(['home']);
  }

  async showToastAndRedirect(message, routerUrl?: string, cliente: any = null) {
    let color = 'primary';
    try {
      await this.dismissToast();
    } catch (e) { }
    let navigationExtras: NavigationExtras = {
      state: cliente
    };
    await this.toastCtrl.create({
      message,
      duration: 2500,
      color: color
    }).then((data) => {
      data.present();
      if (routerUrl != null) {
        this.router.navigate([routerUrl], navigationExtras);
      }
    });
  }

  async showToast(message, anotherColor?) {
    let color = 'primary';
    if (anotherColor) {
      color = anotherColor;
    }
    try {
      await this.dismissToast();
    } catch (e) { }
    await this.toastCtrl.create({
      message,
      duration: 2500,
      color: color,
      buttons: [{
        text: 'x',
        role: 'cancel',
        handler: () => {
        }
      }
      ]
    }).then((data) => {
      data.present();
    });
    return true;
  }


  async dismissToast() {
    await this.toastCtrl.dismiss();
  }

  async showLoading(msg) {
    try {
      await this.dismissLoading();
    } catch (e) { }
    this.loading = await this.loadingCtrl.create({
      message: msg + '..'
    });
    this.loading.present();
  }

  async dismissLoading() {
    try {
      await this.loading.dismiss();
    } catch (e) { }
  }
}
