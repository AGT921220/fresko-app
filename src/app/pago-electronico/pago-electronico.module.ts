import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoElectronicoPageRoutingModule } from './pago-electronico-routing.module';

import { PagoElectronicoPage } from './pago-electronico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoElectronicoPageRoutingModule
  ],
  declarations: [PagoElectronicoPage]
})
export class PagoElectronicoPageModule {}
