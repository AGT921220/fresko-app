import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoPostalSinCoberturaPage } from './codigo-postal-sin-cobertura.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoPostalSinCoberturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoPostalSinCoberturaPageRoutingModule {}
