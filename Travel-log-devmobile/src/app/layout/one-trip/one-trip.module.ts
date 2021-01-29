import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneTripPageRoutingModule } from './one-trip-routing.module';

import { OneTripPage } from './one-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneTripPageRoutingModule
  ],
  declarations: [OneTripPage]
})
export class OneTripPageModule {}
