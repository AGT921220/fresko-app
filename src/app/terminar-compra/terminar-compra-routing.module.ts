import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminarCompraPage } from './terminar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: TerminarCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminarCompraPageRoutingModule {}
