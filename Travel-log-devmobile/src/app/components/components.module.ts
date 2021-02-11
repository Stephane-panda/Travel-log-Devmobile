import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserTripComponent } from './user/user.component';
import { HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [TripComponent, UserTripComponent,HeaderComponent],
  imports: [
    CommonModule, IonicModule,
    RouterModule
  ],
  exports: [TripComponent, UserTripComponent,HeaderComponent]
})
export class ComponentsModule { }
