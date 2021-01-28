import { Injectable } from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private authService: AuthService) {
   }

  getUser() {
    return this.authService.getUserConnected().then(user =>
      console.log(user));
  }
}
