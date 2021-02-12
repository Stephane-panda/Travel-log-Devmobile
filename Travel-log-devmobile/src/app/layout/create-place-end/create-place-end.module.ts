import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlaceEndPageRoutingModule } from './create-place-end-routing.module';

import { CreatePlaceEndPage } from './create-place-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlaceEndPageRoutingModule
  ],
  declarations: [CreatePlaceEndPage]
})
export class CreatePlaceEndPageModule {}
