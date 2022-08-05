import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromosDisponiblesPageRoutingModule } from './promos-disponibles-routing.module';

import { PromosDisponiblesPage } from './promos-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromosDisponiblesPageRoutingModule
  ],
  declarations: [PromosDisponiblesPage]
})
export class PromosDisponiblesPageModule {}
