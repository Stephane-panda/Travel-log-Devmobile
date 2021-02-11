import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTripPageRoutingModule } from './create-trip-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreateTripPage } from './create-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTripPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreateTripPage]
})
export class CreateTripPageModule {}
