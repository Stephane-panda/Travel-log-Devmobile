import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';

import { CreateTripsRequest } from 'src/app/models/Creat-trips-request';
import { environment } from 'src/environments/environment';

import { PlaceService } from 'src/app/services/place.service'; // ?

@Injectable({ providedIn: 'root' })

export class TripService {

  constructor(private http: HttpClient) { }

  getTrips(searchValue?: string): Observable<Trip[]> {
    // check le observe httpresponse !!!!!!
    let paramsUrl = new HttpParams();
    if (searchValue) {paramsUrl = paramsUrl.set('search', searchValue); }
    return this.http
    .get<Trip[]>(environment.apiUrl + '/trips', {params: paramsUrl});
  }

   getTrip(tripid: string ): Observable<Trip> {
    // check le observe httpresponse !!!!!

    return this.http
    .get<Trip>(environment.apiUrl + '/trips/' + tripid);
  }


  getTripsByUserId(searchUserId: string): Observable<Trip[]> {
    let paramsUrl = new HttpParams();
    paramsUrl = paramsUrl.set('user', searchUserId);
    return this.http
    .get<Trip[]>(environment.apiUrl + '/trips', {params: paramsUrl});
  }
  createTrip(createtripRequest: CreateTripsRequest): Observable<Trip> {
    // trip count ++
    return this.http.post<Trip>(environment.apiUrl + '/trips', createtripRequest);

  }

  deleteTrip(tripId){
    return this.http.post<Trip>(environment.apiUrl + '/trips', {params: tripId}
);
}

}
