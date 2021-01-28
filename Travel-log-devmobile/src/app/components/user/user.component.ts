import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {}

}
