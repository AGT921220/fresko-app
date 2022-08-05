import { CustomIcons } from './../custom-icons';
import { Router } from '@angular/router';
import { GlobalService } from './../services/global.service';
import { OrdersComponent } from './../orders/orders.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  cart_icon = CustomIcons.cart;
  constructor(
    private modalCtrl: ModalController,
    private global:GlobalService,
    private router:Router,
    private iab:InAppBrowser
  ) {
    console.log('cart_icon', this.cart_icon);
  }

  async ngOnInit(
  ) {
    
  }

  async viewOrders() {
    this.router.navigate(['/tabs/orders']);
  }

  verPerfil(){
    this.router.navigate(['/tabs/categories']);
  }

  showRederred(){
    this.router.navigate(['/tabs/referred']);
  }

  openWhatsapp(){
    this.iab.create('http://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), "_system");
  }

  async logout(){
    await this.global.logout();
  }
}
