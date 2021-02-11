import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthRequest } from '../models/auth-request';

@Component({
  templateUrl: 'login.page.html',
})

export class LoginPage {

  authRequest: AuthRequest;
  loginError: boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.authRequest = new AuthRequest();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.loginError = false;

    this.auth.logIn(this.authRequest).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.loginError = true;
        console.warn(`Authentication failed: ${err.message}`);
      },
    });
  }
}
