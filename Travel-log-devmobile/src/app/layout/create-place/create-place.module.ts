import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlacePageRoutingModule } from './create-place-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { CreatePlacePage } from './create-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlacePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreatePlacePage]
})
export class CreatePlacePageModule {}
