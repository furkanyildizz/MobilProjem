import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Yorumekle2Page } from './yorumekle2.page';

const routes: Routes = [
  {
    path: '',
    component: Yorumekle2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Yorumekle2PageRoutingModule {}
