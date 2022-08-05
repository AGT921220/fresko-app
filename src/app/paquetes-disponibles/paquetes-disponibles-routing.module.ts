import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaquetesDisponiblesPage } from './paquetes-disponibles.page';

const routes: Routes = [
  {
    path: '',
    component: PaquetesDisponiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaquetesDisponiblesPageRoutingModule {}
