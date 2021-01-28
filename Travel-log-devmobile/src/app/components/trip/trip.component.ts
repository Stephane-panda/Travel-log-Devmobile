import { Component,Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {}

}