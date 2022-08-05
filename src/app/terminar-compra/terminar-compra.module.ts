import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminarCompraPageRoutingModule } from './terminar-compra-routing.module';

import { TerminarCompraPage } from './terminar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminarCompraPageRoutingModule
  ],
  declarations: [TerminarCompraPage]
})
export class TerminarCompraPageModule {}
