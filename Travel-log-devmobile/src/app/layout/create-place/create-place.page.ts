import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TripService } from 'src/app/services/trip.service';
import { PlaceService } from 'src/app/services/place.service';

import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
  tripid: string;

 createPlaceRequest: CreatePlaceRequest = {name : '', description: '', location: '', tripHref: '', tripId: '', pictureUrl: '' };

  constructor(
    // Inject the authentication provider.
    private auth: AuthService,

    private placeService: PlaceService,
    // Inject the router
    private route: ActivatedRoute,
    private router: Router,
    private place: Place
    ) {
      this.createPlaceRequest.tripId = this.route.snapshot.paramMap.get('id');
    }

     createPlace() {

       this.placeService.createPlace(this.createPlaceRequest).subscribe((place) => {
/*
      this.router.navigate(['create-place', place.tripId]); */
  this.router.navigate(['trip-list']);
    }
  ); }

  ngOnInit() {
  }

}
