import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcollectionPage } from './addcollection.page';

const routes: Routes = [
  {
    path: '',
    component: AddcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcollectionPageRoutingModule {}
