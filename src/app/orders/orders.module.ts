import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrdersRoutingModule],
  declarations: [OrdersComponent],
})
export class OrdersModule {}
