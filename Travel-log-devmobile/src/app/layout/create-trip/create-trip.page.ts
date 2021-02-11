import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TripService } from 'src/app/services/trip.service';
import { CreateTripsRequest } from 'src/app/models/Creat-trips-request';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
  createtripRequest: CreateTripsRequest = { title: '', description: '' };
  constructor(
    private auth: AuthService,
    private tripService: TripService,
    private router: Router) { }

  saveTrip() {
    this.tripService.createTrip(this.createtripRequest).subscribe((res) => {
      this.router.navigateByUrl('trip-list');
    });

  }

  ngOnInit() {
  }

  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}