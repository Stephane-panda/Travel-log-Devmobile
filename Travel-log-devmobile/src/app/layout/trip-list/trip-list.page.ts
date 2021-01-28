import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage  {

  trips: Trip[];
  searchValue: string;

  constructor( // Inject the AuthService
  private tripService: TripService) { }

  /* /!\ion view did entrer refreche la liste  */
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
    console.log('hihi');
  }
}
