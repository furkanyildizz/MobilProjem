import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnasayfaPage } from './anasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
        
      },
      {
        path: 'yorumekle2',
        children: [
          {
            path: '',
            loadChildren: () => import('../yorumekle2/yorumekle2.module').then( m => m.Yorumekle2PageModule)
          }
        ]
        
      },
      {
        path: 'yorumoku',
        children: [
          {
            path: '',
            loadChildren: () => import('../yorumoku/yorumoku.module').then( m => m.YorumokuPageModule)
          }
        ]
        
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
        
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnasayfaPageRoutingModule {}
