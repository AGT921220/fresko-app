import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioEntregaPageRoutingModule } from './horario-entrega-routing.module';

import { HorarioEntregaPage } from './horario-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioEntregaPageRoutingModule
  ],
  declarations: [HorarioEntregaPage]
})
export class HorarioEntregaPageModule {}
