import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EfectivoCompraPageRoutingModule } from './efectivo-compra-routing.module';

import { EfectivoCompraPage } from './efectivo-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EfectivoCompraPageRoutingModule
  ],
  declarations: [EfectivoCompraPage]
})
export class EfectivoCompraPageModule {}
