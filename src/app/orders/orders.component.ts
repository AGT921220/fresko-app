import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Globals } from '../globals';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  idUser: string;
  isLoading: boolean;

  constructor(private router: Router, private g: Globals, private apiService: ApiService,
     private global:GlobalService) { 
    }

  async ionViewWillEnter() {
    await this.obtenerOrdenes();
  }

  async ngOnInit() {

  }


  async obtenerOrdenes(){
    this.isLoading = true;
    this.idUser = String(this.g.idUser);
    let orders = [];
    if (this.g.idUser !== -1) {
      await this.global.showLoading("Cargando..");
      await this.apiService.getOrders(this.idUser).toPromise().then((response: any) => {
        orders = response.orders;
      }).catch(error =>{
        this.global.dismissLoading();
      });
      await this.global.dismissLoading();
    } else {
      this.back();
    }
    let first = "B";
    for(var i = 0; i < orders.length; i++){
      if(first == "B"){
        first = "A";
      } else{
        first = "B";
      }
      orders[i].tipo = first;
    }
    this.orders = orders;
    this.isLoading = false;
    console.log('Ordenes', this.orders);
  }

  openDetails(id: number) {
    this.router.navigate([`order-details/${id}`]);
  }

  back() {
    this.router.navigate(['tabs/categories']);
  }
}
