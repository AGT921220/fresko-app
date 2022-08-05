import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Globals } from '../globals';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
})
export class Tabs2Page implements OnInit {
  constructor(
    private nav:NavController,
    private router:Router,
    private g:Globals,
    private global:GlobalService,
    private iab:InAppBrowser
  ) { }

  async ngOnInit() {
  }

  back(){
    this.router.navigate(['/tabs/categories']);
  }

  carrito() {
    this.global.finish_order = "tabs";
    this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
    this.router.navigate(["finish-order"]);
  }

  pagar() {
    if (this.g.fruits.length >= 1 || this.g.vegetables.length >= 1 || this.g.spices.length >= 1 || this.g.carnes.length >= 1 || this.g.cremeria.length >= 1 || this.g.otros.length >= 1) {
      this.global.send_order_return = "/tabs2/products/" + this.global.id_category;
      this.global.finish_order_return = "/tabs2/products/" + this.global.id_category;
      this.global.finish_order = "tabs";
      this.router.navigate(['send-order']);
    } else{
      return this.global.showToast("No hay nada en el carrito", "danger");
    }
  }

  
  openWhatsapp(){
    this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
  }


}
