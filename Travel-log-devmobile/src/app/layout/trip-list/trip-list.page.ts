import { Component} from '@angular/core';
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

  constructor(private tripService: TripService) { }

  ionViewDidEnter() {
    this.getListTrips();
  }

  getListTrips() {
    this.tripService.getTrips(this.searchValue).subscribe((trips) => {
      this.trips = trips;
    });
  }
  
  cancelSearch() {
    this.searchValue = "";
    this.getListTrips();
  }

  viewTripDetails() {
  }
}