import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import  { UserComponent } from './user/user.component';



@NgModule({
  declarations: [TripComponent, UserComponent],
  imports: [
    CommonModule
  ],
  exports: [TripComponent, UserComponent]
})
export class ComponentsModule { }
