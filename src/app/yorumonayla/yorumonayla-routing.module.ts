import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YorumonaylaPage } from './yorumonayla.page';

const routes: Routes = [
  {
    path: '',
    component: YorumonaylaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YorumonaylaPageRoutingModule {}
