import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { HttpClient } from '@angular/common/http';
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Trip } from 'src/app/models/trip';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.page.html',
  styleUrls: ['./one-trip.page.scss'],
})
export class OneTripPage implements OnInit {

trip: Trip;
searchValue: string;
tripid: string;

  constructor(private tripService: TripService, private route: ActivatedRoute) {
    this.tripid = this.route.snapshot.paramMap.get('id');
  }


/* /!\ion view did entrer refreche la liste  */
  ionViewDidEnter() {
     this.tripService.getTrip(this.tripid).subscribe((trip) => {
      this.trip = trip;
    });
  }

 ngOnInit() {
  }
}
