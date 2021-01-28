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

  constructor(private authService: AuthService, private tripService: TripService) {}
  
  ionViewDidEnter() {
    this.authService.getUser().subscribe(user => {
      this.user = user
      this.tripService.getTripsByUserId(this.user.id).subscribe(trips => {
        this.trips = trips;
        this.getLastTrip();
      })
    });
  }

  getTripsFromUser() {
    this.trips.filter(function (trips) {
      return console.log(trips.userId == this.user.id);
    });
  }

  getLastTrip() {
    this.trips.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      else if (a.createdAt === b.createdAt) {
        return 0;
      }
      else {
        return 1;
      }});
  }
}