import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})

export class UserAccountPage {

  constructor(private userService: UserService) { }

  getUserConnected() {
    console.log(this.userService.getUserConnected());
    return this.userService.getUserConnected();
  }
}
