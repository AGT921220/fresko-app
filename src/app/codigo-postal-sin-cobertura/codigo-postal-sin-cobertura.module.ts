import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoPostalSinCoberturaPageRoutingModule } from './codigo-postal-sin-cobertura-routing.module';

import { CodigoPostalSinCoberturaPage } from './codigo-postal-sin-cobertura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoPostalSinCoberturaPageRoutingModule
  ],
  declarations: [CodigoPostalSinCoberturaPage]
})
export class CodigoPostalSinCoberturaPageModule {}
