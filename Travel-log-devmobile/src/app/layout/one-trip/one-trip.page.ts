import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.page.html',
  styleUrls: ['./one-trip.page.scss'],
})
export class OneTripPage implements OnInit {

  trip: Trip;
  searchValue: string;
  tripid: string;
  user: User;


  constructor(private tripService: TripService, private route: ActivatedRoute, private authservice: AuthService, private router: Router) {
    this.tripid = this.route.snapshot.paramMap.get('id');
  }

  Delete() {
  this.tripService.deleteTrip(this.tripid).subscribe((res) => {

    this.router.navigate(['trip-list', res.id]);
});
  }
/*    Modify() {
    this.tripService.modifyTrip(this.trip).subscribe((res) => {

    this.router.navigate(['trip-list', res.id]);
   } */


  ionViewDidEnter() {
    this.authservice.getUser().subscribe((user) => {
      this.user = user;
    });

    this.tripService.getTrip(this.tripid).subscribe((trip) => {
      this.trip = trip;
    });
  }

  ngOnInit() {
  }
   logOut() {
    console.log('logging out...');
    this.authservice.logOut();
    this.router.navigateByUrl('/login');
  }
}
