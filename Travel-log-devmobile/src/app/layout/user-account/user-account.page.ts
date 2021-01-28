import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})

export class UserAccountPage {
  user: User;
  trips: Trip[];

  constructor(private authService: AuthService, private tripService: TripService) {
    this.authService.getUser().subscribe(user => this.user = user);
  }

  getAllTrips() {
    this.tripService.getTripsWithoutSearchBar().subscribe(trips => this.trips = trips);
    console.log(this.trips);
  }

  getTripsFromUser() {
    this.trips.filter(function (trips) {
      return console.log(trips.userId == this.user.id);
    });
  }

  getLastTrip() {

  }
}
