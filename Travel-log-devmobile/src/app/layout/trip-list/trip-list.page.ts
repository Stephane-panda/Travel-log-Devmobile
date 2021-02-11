import { Component} from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage  {

  trips: Trip[];
  searchValue: string;

  constructor(private tripService: TripService, private authservice: AuthService, private router: Router) { }

  ionViewDidEnter() {
    this.getListTrips();
  }

  getListTrips() {
    this.tripService.getTrips(this.searchValue).subscribe((trips) => {
      this.trips = trips;
    });
  }

  cancelSearch() {
    this.searchValue = '';
    this.getListTrips();
  }

  viewTripDetails() {
  }
  logOut() {
    console.log('logging out...');
    this.authservice.logOut();
    this.router.navigateByUrl('/login');
  }
}
