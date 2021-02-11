import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OneTripPageRoutingModule } from './one-trip-routing.module';
import { OneTripPage } from './one-trip.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneTripPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OneTripPage]
})
export class OneTripPageModule {}
