import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Yorumekle2PageRoutingModule } from './yorumekle2-routing.module';

import { Yorumekle2Page } from './yorumekle2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Yorumekle2PageRoutingModule
  ],
  declarations: [Yorumekle2Page]
})
export class Yorumekle2PageModule {}
