import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Globals } from '../globals';

@Component({
  selector: 'app-metodo-de-pago',
  templateUrl: './metodo-de-pago.page.html',
  styleUrls: ['./metodo-de-pago.page.scss'],
})
export class MetodoDePagoPage implements OnInit {
  metodo_de_pago = "";
  constructor(
    private nav:NavController,
    private router:Router,
    private global:GlobalService,
    private g:Globals
  ) { }
  ngOnInit() {
  }

  back() {
    this.nav.pop(); 
  }

  elegirMetodo(tipo){
    this.metodo_de_pago = tipo;
  }

  async continuar(){
    if(this.metodo_de_pago == ""){
      return this.global.showToast("Selecciona un metodo de pago.", "danger");
    }
    this.g.metodo_pago = this.metodo_de_pago;
    if(this.g.metodo_pago == "EFECTIVO"){
      this.router.navigate(['/efectivo-compra']);
    } else if(this.g.metodo_pago == "TARJETA" || this.g.metodo_pago == "TRANSFERENCIA"){
      this.router.navigate(['/pago-electronico']);
    }
  }

}
