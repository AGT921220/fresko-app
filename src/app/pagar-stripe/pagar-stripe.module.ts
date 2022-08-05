import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarStripePageRoutingModule } from './pagar-stripe-routing.module';

import { PagarStripePage } from './pagar-stripe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    PagarStripePageRoutingModule
  ],
  declarations: [PagarStripePage]
})
export class PagarStripePageModule {}
