import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YorumeklePageRoutingModule } from './yorumekle-routing.module';

import { YorumeklePage } from './yorumekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YorumeklePageRoutingModule
  ],
  declarations: [YorumeklePage]
})
export class YorumeklePageModule {}
