import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { UserTripComponent } from './user/user.component';


@NgModule({
  declarations: [TripComponent, UserTripComponent],
  imports: [
    CommonModule, IonicModule,
    RouterModule
  ],
  exports: [TripComponent, UserTripComponent]
})
export class ComponentsModule { }
