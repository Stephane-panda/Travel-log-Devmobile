import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';



@NgModule({
  declarations: [TripComponent],
  imports: [
    CommonModule
  ],
  exports: [TripComponent]
})  
export class ComponentsModule { }
