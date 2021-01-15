import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class TripService {
  
  constructor(private http: HttpClient) { }
  
  getTrips(): Observable<Trip[]> {
    // check le observe httpresponse !!!!!! 
    return this.http
    .get<Trip[]>('https://greenandgreens-travel-log.herokuapp.com/api/trips')    
  }
}

