import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YorumokuPage } from './yorumoku.page';

const routes: Routes = [
  {
    path: '',
    component: YorumokuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YorumokuPageRoutingModule {}
