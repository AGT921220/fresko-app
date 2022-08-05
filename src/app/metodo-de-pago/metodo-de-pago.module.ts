import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetodoDePagoPageRoutingModule } from './metodo-de-pago-routing.module';

import { MetodoDePagoPage } from './metodo-de-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetodoDePagoPageRoutingModule
  ],
  declarations: [MetodoDePagoPage]
})
export class MetodoDePagoPageModule {}
