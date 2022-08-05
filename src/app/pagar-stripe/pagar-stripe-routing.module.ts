import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarStripePage } from './pagar-stripe.page';

const routes: Routes = [
  {
    path: '',
    component: PagarStripePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarStripePageRoutingModule {}
