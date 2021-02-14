import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TripService } from 'src/app/services/trip.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authService: AuthService,
    private tripService: TripService,
    private http: HttpClient,
  ) { }

  getUser() {
    return this.authService.getUser().subscribe();
  }

  getTrips() {
    return this.tripService.getTrips().subscribe();
  }

  changeName(newName, userId): Observable<User> {
    return this.http.patch<User>(environment.apiUrl + '/users/' + userId, newName)
    .pipe(
        catchError((err) => {
          console.log('error caught in service');
          console.error(err);
          // Handle the error here
          return throwError(err);    // Rethrow it back to component
        })
      );
  }

  deleteUser(userId) {
    return this.http.delete<User>(environment.apiUrl + '/users/' + userId)
      .pipe(
        catchError((err) => {
          console.log('error caught in service');
          console.error(err);
          // Handle the error here
          return throwError(err);    // Rethrow it back to component
        })
      );
  }
}
