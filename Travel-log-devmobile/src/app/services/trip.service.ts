import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { CreateTripsRequest } from 'src/app/models/Creat-trips-request';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class TripService {

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    // check le observe httpresponse !!!!!!
    return this.http
    .get<Trip[]>(environment.apiUrl + '/trips');
  }

  createTrip(createtripRequest: CreateTripsRequest) {

    return this.http.post(environment.apiUrl + '/trips', createtripRequest);
  }
}

