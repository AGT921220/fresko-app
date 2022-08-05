import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionClientePage } from './verificacion-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionClientePageRoutingModule {}
