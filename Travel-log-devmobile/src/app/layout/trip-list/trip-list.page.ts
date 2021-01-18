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

  constructor( // Inject the AuthService
  private tripService: TripService) { }

  ionViewDidEnter() {
    this.tripService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }
/* /!\ion view did entrer refreche la liste  */
}
