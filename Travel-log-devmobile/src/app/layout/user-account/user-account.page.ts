import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})

export class UserAccountPage {
  user: User;

  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }
}
