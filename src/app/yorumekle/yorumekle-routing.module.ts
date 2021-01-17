import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YorumeklePage } from './yorumekle.page';

const routes: Routes = [
  {
    path: '',
    component: YorumeklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YorumeklePageRoutingModule {}
