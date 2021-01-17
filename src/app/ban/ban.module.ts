import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanPageRoutingModule } from './ban-routing.module';

import { BanPage } from './ban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanPageRoutingModule
  ],
  declarations: [BanPage]
})
export class BanPageModule {}
