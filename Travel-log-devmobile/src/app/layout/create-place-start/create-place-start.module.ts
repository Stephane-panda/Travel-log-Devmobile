import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlaceStartPageRoutingModule } from './create-place-start-routing.module';

import { CreatePlaceStartPage } from './create-place-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlaceStartPageRoutingModule
  ],
  declarations: [CreatePlaceStartPage]
})
export class CreatePlaceStartPageModule {}
