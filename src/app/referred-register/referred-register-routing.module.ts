import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferredRegisterPage } from './referred-register.page';

const routes: Routes = [
  {
    path: '',
    component: ReferredRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferredRegisterPageRoutingModule { }
