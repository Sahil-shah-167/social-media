import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstaprofilePageRoutingModule } from './instaprofile-routing.module';

import { InstaprofilePage } from './instaprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstaprofilePageRoutingModule
  ],
  declarations: [InstaprofilePage]
})
export class InstaprofilePageModule {}
