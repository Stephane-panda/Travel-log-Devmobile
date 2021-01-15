import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaladeListPageRoutingModule } from './balade-list-routing.module';

import { BaladeListPage } from './balade-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaladeListPageRoutingModule
  ],
  declarations: [BaladeListPage]
})
export class BaladeListPageModule {}
