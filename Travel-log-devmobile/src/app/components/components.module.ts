import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import  { UserTripComponent } from './user/user.component';



@NgModule({
  declarations: [TripComponent, UserTripComponent],
  imports: [
    CommonModule
  ],
  exports: [TripComponent, UserTripComponent]
})
export class ComponentsModule { }
