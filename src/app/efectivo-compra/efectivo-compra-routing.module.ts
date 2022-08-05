import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EfectivoCompraPage } from './efectivo-compra.page';

const routes: Routes = [
  {
    path: '',
    component: EfectivoCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EfectivoCompraPageRoutingModule {}
