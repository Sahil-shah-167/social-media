import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstaprofilePage } from './instaprofile.page';

const routes: Routes = [
  {
    path: '',
    component: InstaprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstaprofilePageRoutingModule {}
