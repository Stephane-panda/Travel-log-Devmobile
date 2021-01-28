import { Injectable } from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';
import { TripService } from 'src/app/services/trip.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private tripService: TripService) { }

  getUser() {
    return this.authService.getUser().subscribe();
  }

  getTrips() {
    return this.tripService.getTripsWithoutSearchBar().subscribe();
  }
}