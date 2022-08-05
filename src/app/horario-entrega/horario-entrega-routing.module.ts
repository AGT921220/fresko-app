import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioEntregaPage } from './horario-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioEntregaPageRoutingModule {}
