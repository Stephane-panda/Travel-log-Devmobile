import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBaladePageRoutingModule } from './create-balade-routing.module';

import { CreateBaladePage } from './create-balade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBaladePageRoutingModule
  ],
  declarations: [CreateBaladePage]
})
export class CreateBaladePageModule {}
