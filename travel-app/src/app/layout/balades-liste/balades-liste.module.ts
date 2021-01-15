import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaladesListePageRoutingModule } from './balades-liste-routing.module';

import { BaladesListePage } from './balades-liste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaladesListePageRoutingModule
  ],
  declarations: [BaladesListePage]
})
export class BaladesListePageModule {}
