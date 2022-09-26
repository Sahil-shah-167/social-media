import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotsettingPage } from './notsetting.page';

const routes: Routes = [
  {
    path: '',
    component: NotsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotsettingPageRoutingModule {}
