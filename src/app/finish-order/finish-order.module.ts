import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishOrderPageRoutingModule } from './finish-order-routing.module';

import { FinishOrderPage } from './finish-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishOrderPageRoutingModule
  ],
  declarations: [FinishOrderPage]
})
export class FinishOrderPageModule {}
