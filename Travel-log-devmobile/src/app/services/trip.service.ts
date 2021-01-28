import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';

import { CreateTripsRequest } from 'src/app/models/Creat-trips-request';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class TripService {

  constructor(private http: HttpClient) { }

  getTrips(searchValue?:string): Observable<Trip[]> {
    // check le observe httpresponse !!!!!!
    let paramsUrl = new HttpParams();
    if(searchValue)paramsUrl= paramsUrl.set('search',searchValue);
    return this.http
    .get<Trip[]>(environment.apiUrl + '/trips',{params:paramsUrl});
  }

  createTrip(createtripRequest: CreateTripsRequest) {
    return this.http.post(environment.apiUrl + '/trips', createtripRequest);
  }
}