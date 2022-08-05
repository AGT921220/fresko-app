import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsRoutingModule } from './order-details-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OrderDetailsRoutingModule],
  declarations: [OrderDetailsComponent],
})
export class OrderDetailsModule {}
