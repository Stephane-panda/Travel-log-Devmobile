import { Injectable } from '@angular/core';
import {AuthService} from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  getUserConnected() {
    return this.authService.getUserConnected();
  }
}