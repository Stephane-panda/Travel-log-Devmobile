import { Component, OnInit } from '@angular/core';
import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
createPlaceRequest: CreatePlaceRequest = {name: '', description: '', location : '[46.453377, 6.893891]', tripHref : '/api/trips/4906251d-9909-46b6-8973-25ab690329df', tripId : '4906251d-9909-46b6-8973-25ab690329df', pictureUrl: '' };
  constructor(
    private placeService: PlaceService,
    private router: Router
    ) { }

    savePlace() {
    this.placeService.createPlace(this.createPlaceRequest).subscribe((res) => {
      this.router.navigateByUrl('trip-list');
    });
  }

  ngOnInit() {
  }

}
