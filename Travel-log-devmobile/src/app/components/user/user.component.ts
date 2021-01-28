import { Component,Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-user-trip',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserTripComponent implements OnInit {
  @Input() trip: Trip;

  constructor() {}

  ngOnInit() {}

}