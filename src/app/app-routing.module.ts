import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  }, 
  { 
      path: 'anasayfa',
      loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule) 
  }
 , {
    path: 'yorumekle',
    loadChildren: () => import('./yorumekle/yorumekle.module').then( m => m.YorumeklePageModule)
  },
  {
    path: 'yorumoku',
    loadChildren: () => import('./yorumoku/yorumoku.module').then( m => m.YorumokuPageModule)
  },
  {
    path: 'yonetici',
    loadChildren: () => import('./yonetici/yonetici.module').then( m => m.YoneticiPageModule)
  },
  {
    path: 'ban',
    loadChildren: () => import('./ban/ban.module').then( m => m.BanPageModule)
  },
  {
    path: 'yorumekle2',
    loadChildren: () => import('./yorumekle2/yorumekle2.module').then( m => m.Yorumekle2PageModule)
  },
  {
    path: 'yorumonayla',
    loadChildren: () => import('./yorumonayla/yorumonayla.module').then( m => m.YorumonaylaPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
