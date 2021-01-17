import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YorumonaylaPageRoutingModule } from './yorumonayla-routing.module';

import { YorumonaylaPage } from './yorumonayla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YorumonaylaPageRoutingModule
  ],
  declarations: [YorumonaylaPage]
})
export class YorumonaylaPageModule {}
