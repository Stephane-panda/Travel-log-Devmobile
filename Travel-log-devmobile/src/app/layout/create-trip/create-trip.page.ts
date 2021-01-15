import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

import { CreateTripsRequest } from 'src/app/models/Creat-trips-request';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
createtripRequest: CreateTripsRequest = {title: '', description : ''};
  constructor(
    // Inject the authentication provider.
    private auth: AuthService,
    // Inject the router
    private router: Router) { }

    createtrips() {

    /* //to do create trips service.subscribe(() => {

    this.router.navigateByUrl('trip-list');
    }); */


/*     }); */
  }

  ngOnInit() {
  }
// Add a method to log out.
  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
