import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YorumokuPageRoutingModule } from './yorumoku-routing.module';

import { YorumokuPage } from './yorumoku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YorumokuPageRoutingModule
  ],
  declarations: [YorumokuPage]
})
export class YorumokuPageModule {}
