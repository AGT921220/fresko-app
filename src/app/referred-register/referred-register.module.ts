import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferredRegisterPageRoutingModule } from './referred-register-routing.module';

import { ReferredRegisterPage } from './referred-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferredRegisterPageRoutingModule
  ],
  declarations: [ReferredRegisterPage]
})
export class ReferredRegisterPageModule {}
