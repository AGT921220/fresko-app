import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from './../services/global.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  codigo_postal = "";
  showFooter = true;
  constructor(
    private router: Router,
    private global: GlobalService,
    private api: ApiService,
    private iab:InAppBrowser
  ) { }

  ngOnInit() {
  }

  regresarInicio() {
    this.router.navigate(['/home'])
  }

  async buscarCodigoPostal() {
    if (this.codigo_postal == "") {
      return this.global.showToast("Ingresa el codigo postal para validarlo.", "danger");
    }
    await this.global.showLoading("Verificando..");
    let result = null;
    await this.api.VerificarCobertura(this.codigo_postal).toPromise().then((response: any) => {
      result = response;
      this.codigo_postal = "";
      if (!response.success) {
        this.global.showToastAndRedirect(response.message, "cp-nocobertura");
      }
    }).catch(error => {
      this.global.dismissLoading();
    });
    await this.global.dismissLoading();
    if (result != null) {
      if (result.success) {
        this.global.showToastAndRedirect(result.message, "registro-cliente", this.codigo_postal)
      }
    }
  }

  openWhatsapp() {
    this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
  }

  setInputFocus() {
    this.showFooter = false;
    console.log("Input box is active");
  }

  unCheckFocus() {
    this.showFooter = true;
    console.log("Input box is Deactive");
  }
}
