import { GlobalService } from '../services/global.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Globals } from '../globals';
import { Platform, ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-referred-register',
  templateUrl: './referred-register.page.html',
  styleUrls: ['./referred-register.page.scss'],
})
export class ReferredRegisterPage {
  apiService: ApiService;
  router: Router;
  backButtonSubscription;
  referred_code = "";
  constructor(
    apiService: ApiService,
    router: Router,
    private platform: Platform,
    private g: Globals,
    public toastController: ToastController,
    public global: GlobalService,
    private iab: InAppBrowser
  ) {
    console.log('User', this.global.user_info);
    this.apiService = apiService;
    this.router = router;
  }

  async logout() {
    await this.global.logout();
  }
  async enterReferredCode() {
    if (this.referred_code.length < 10 || this.referred_code == '') {
      this.showErrorMessage('Introduce un código')
      return
    }

    if (this.referred_code == this.global.user_info.telephone) {
      this.showErrorMessage('No puedes usar tu código')
      return

    }

    this.apiService.checkReferredCode(this.referred_code).toPromise().then((resp) => {
      this.processResponse(JSON.parse(JSON.stringify(resp)))
    });

  }
  processResponse(response) {
    if (!response.success) {
      this.showErrorMessage(response.message)
      return
    }

    this.apiService.registerReferredCode(response.message, this.global.user_info.iduser).toPromise().then((resp) => {
      let response = JSON.parse(JSON.stringify(resp))
      if (!response.success) {
        this.showErrorMessage(response.message)
        return
      }
      this.global.showToastAndRedirect('Su código fue registrado con éxito', "/tabs/categories");

    });

  }
  showErrorMessage(message) {
    this.global.showToast(message, "danger");
    return
  }

  skipReferredCode(){
    this.global.showToastAndRedirect('Gracias por registrarse', "/tabs/categories");
  }
}
