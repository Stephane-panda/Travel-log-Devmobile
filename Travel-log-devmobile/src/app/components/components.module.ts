import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import  { UserTripComponent } from './user/user.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TripComponent, UserTripComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TripComponent, UserTripComponent]
})
export class ComponentsModule { }
