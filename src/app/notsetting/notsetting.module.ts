import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotsettingPageRoutingModule } from './notsetting-routing.module';

import { NotsettingPage } from './notsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotsettingPageRoutingModule
  ],
  declarations: [NotsettingPage]
})
export class NotsettingPageModule {}
