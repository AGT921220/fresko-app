import { NavController } from '@ionic/angular';
import { GlobalService } from './../services/global.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-transferencia',
  templateUrl: './pago-transferencia.page.html',
  styleUrls: ['./pago-transferencia.page.scss'],
})
export class PagoTransferenciaPage implements OnInit {

  constructor(
    private router:Router,
    private global:GlobalService,
    private nav:NavController
  ) { }

  ngOnInit() {
  }

  finalizar(){
    this.router.navigate(['/tabs/categories']);
    window.open('https://api.whatsapp.com/send?phone=' + this.global.getAppConfigFlag("WHATSAPP"), '_system');
  }

  back() {
    this.nav.pop(); 
  }

}


