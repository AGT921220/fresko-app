import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetodoDePagoPage } from './metodo-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: MetodoDePagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetodoDePagoPageRoutingModule {}
