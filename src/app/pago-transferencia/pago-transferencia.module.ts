import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoTransferenciaPageRoutingModule } from './pago-transferencia-routing.module';

import { PagoTransferenciaPage } from './pago-transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoTransferenciaPageRoutingModule
  ],
  declarations: [PagoTransferenciaPage]
})
export class PagoTransferenciaPageModule {}
