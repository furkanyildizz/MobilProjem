import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanPage } from './ban.page';

const routes: Routes = [
  {
    path: '',
    component: BanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanPageRoutingModule {}
