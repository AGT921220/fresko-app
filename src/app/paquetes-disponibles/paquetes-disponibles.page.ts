import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paquetes-disponibles',
  templateUrl: './paquetes-disponibles.page.html',
  styleUrls: ['./paquetes-disponibles.page.scss'],
})
export class PaquetesDisponiblesPage implements OnInit {


  constructor(
    public global:GlobalService,
    private api:ApiService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  finishOrder() {
    this.router.navigate(["finish-order"]);
  }
  
  confirmar(){

  }

  back(){
    this.router.navigate(['tabs/categories']);
  }


}
