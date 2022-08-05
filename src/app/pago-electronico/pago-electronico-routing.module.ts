import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoElectronicoPage } from './pago-electronico.page';

const routes: Routes = [
  {
    path: '',
    component: PagoElectronicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoElectronicoPageRoutingModule {}
