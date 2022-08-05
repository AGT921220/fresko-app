import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  idUser: string;
  order: any;
  contentOrder: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private g: Globals,
    private apiService: ApiService,
    private global:GlobalService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id != null) {
        this.idUser = String(this.g.idUser);
        this.apiService.getOrders(this.idUser).subscribe((response: any) => {
          const orders: any[] = response.orders;
          this.order = orders.find((x) => Number(x.idorder) === Number(params.id));
          this.contentOrder = this.order.content_order;
          console.log('Order', this.order);

        });
      } else {
        this.back();
      }
    });
  }

  pagar(){
    this.global.a_pagar = {
      idorder: this.order.idorder,
      precio_final: this.order.subtotal_real
    };
    this.router.navigate(['/terminar-compra']);
  }

  getTotal() {
    let total = 0;
    for (const product of this.contentOrder) {
      total += Number(product.price);
    }
    return total;
  }

  back() {
    this.router.navigate(['orders']);
  }
}
