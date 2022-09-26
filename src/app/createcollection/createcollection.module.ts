import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecollectionPageRoutingModule } from './createcollection-routing.module';

import { CreatecollectionPage } from './createcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecollectionPageRoutingModule
  ],
  declarations: [CreatecollectionPage]
})
export class CreatecollectionPageModule {}
