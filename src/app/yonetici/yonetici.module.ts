import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoneticiPageRoutingModule } from './yonetici-routing.module';

import { YoneticiPage } from './yonetici.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoneticiPageRoutingModule
  ],
  declarations: [YoneticiPage]
})
export class YoneticiPageModule {}
