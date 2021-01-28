import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';




@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule, IonicModule,
    RouterModule
  ],
  exports: [TripComponent]
})
export class ComponentsModule { }
