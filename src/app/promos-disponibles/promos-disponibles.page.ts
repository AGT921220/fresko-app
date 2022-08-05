import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from '../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promos-disponibles',
  templateUrl: './promos-disponibles.page.html',
  styleUrls: ['./promos-disponibles.page.scss'],
})
export class PromosDisponiblesPage implements OnInit {

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
