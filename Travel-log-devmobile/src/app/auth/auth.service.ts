import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { AuthRequest } from '../models/auth-request';
import { RegisterRequest } from '../models/register-request';

import { Observable, ReplaySubject, from } from 'rxjs';
import { delayWhen, map,switchMap, first  } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';


/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private auth$: Observable<AuthResponse>;
  private authSource: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.authSource = new ReplaySubject(1);
    this.auth$ = this.authSource.asObservable();
    // this.authSource.next(null); <-- REMOVE THIS LINE
    // Load the stored authentication response from storage when the app starts.
    this.storage.get('auth').then(auth => {
      // Emit the loaded value into the auth$ stream.
      this.authSource.next(auth);
    });
  }

  register(register: RegisterRequest) {
    return this.http.post(environment.apiUrl + '/users', register);
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

  updateUser(updatedUser: User) : Observable<User> {
    return this.authSource.pipe(first(), switchMap(auth => {
      auth.user = updatedUser;
      return this.saveAuth(auth).pipe(map(() => {
        this.authSource.next(auth);
        return updatedUser;
      }))
    }));
  }

  logIn(authRequest: AuthRequest): Observable<User> {
    const authUrl = `${environment.apiUrl}/auth`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      // Delay the observable stream while persisting the authentication response.
      delayWhen(auth => this.saveAuth(auth)),
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
