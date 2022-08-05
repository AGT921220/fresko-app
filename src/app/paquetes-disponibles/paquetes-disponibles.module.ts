import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquetesDisponiblesPageRoutingModule } from './paquetes-disponibles-routing.module';

import { PaquetesDisponiblesPage } from './paquetes-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquetesDisponiblesPageRoutingModule
  ],
  declarations: [PaquetesDisponiblesPage]
})
export class PaquetesDisponiblesPageModule {}
