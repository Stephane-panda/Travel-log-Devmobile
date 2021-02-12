import { Component, OnInit } from '@angular/core';
import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
createplaceRequest: partial<CreatePlaceRequest> = { title: '', description: '' }
  constructor() { }

  ngOnInit() {
  }

}
