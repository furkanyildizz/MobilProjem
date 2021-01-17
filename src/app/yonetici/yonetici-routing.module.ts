import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoneticiPage } from './yonetici.page';

const routes: Routes = [
  {
    path: '',
    component: YoneticiPage,
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
        path: 'yorumekle',
        children: [
          {
            path: '',
            loadChildren: () => import('../yorumekle/yorumekle.module').then( m => m.YorumeklePageModule)
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
        path: 'yorumonayla',
        children: [
          {
            path: '',
            loadChildren: () => import('../yorumonayla/yorumonayla.module').then( m => m.YorumonaylaPageModule)
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
        
      },
      {
        path: 'ban',
        children: [
          {
            path: '',
            loadChildren: () => import('../ban/ban.module').then( m => m.BanPageModule)
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
export class YoneticiPageRoutingModule {}
