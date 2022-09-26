import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecollectionPage } from './createcollection.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecollectionPageRoutingModule {}
