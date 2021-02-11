import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/register-request';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerRequest: RegisterRequest = { name: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  //  TODO : VALIDATION REGISTER!!!
  register() {

    this.authService.register(this.registerRequest).subscribe((res) => {

      this.authService.logIn({ username: this.registerRequest.name, password: this.registerRequest.password }).subscribe(() => {

        this.router.navigateByUrl('create-trip');
      });
    });
  }

  ngOnInit() {
  }
}
