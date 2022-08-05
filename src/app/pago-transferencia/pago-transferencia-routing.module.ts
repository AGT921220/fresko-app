import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoTransferenciaPage } from './pago-transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: PagoTransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoTransferenciaPageRoutingModule {}
