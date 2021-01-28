import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-user-account',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() trips: Trip[];

  constructor() {}

  ngOnInit() {}

}