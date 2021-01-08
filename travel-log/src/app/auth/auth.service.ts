import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { map } from "rxjs/operators";
import { Storage } from "@ionic/storage";

import { AuthResponse } from "../models/auth-response";
import { User } from "../models/user";
import { AuthRequest } from "../models/auth-request";
import { environment } from "src/environments/environment";



/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
  private auth$: Observable<AuthResponse>;
  private authSource: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {

    this.authSource = new ReplaySubject(1);
    this.auth$ = this.authSource.asObservable();
    this.storage.get('auth').then(auth => {
      this.authSource.next(auth);
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth$.pipe(map((auth) => Boolean(auth)));
  }

  private saveAuth(auth: AuthResponse): Observable<void> {
    return from(this.storage.set('auth', auth));
  }

  getUser(): Observable<User> {
    return this.auth$.pipe(map((auth) => auth?.user));
  }

  getToken(): Observable<string> {
    return this.auth$.pipe(map((auth) => auth?.token));
  }

  logIn(authRequest: AuthRequest): Observable<User> {
    const authUrl = `${environment.apiUrl}/auth`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      map((auth) => {
        this.authSource.next(auth);
        console.log(`User ${auth.user.name} logged in`);
        return auth.user;
      })
    );
  }

  logOut() {
    this.authSource.next();
    this.storage.remove('auth');
    console.log('User logged out');
  }
}