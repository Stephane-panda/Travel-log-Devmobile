import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private http: HttpClient) { }

  // getUser(): Observable<User> {
  //   return 
  // }

  // getTrips(searchValue?:string): Observable<User[]> {
  //   // check le observe httpresponse !!!!!!
  //   let paramsUrl = new HttpParams();
  //   if(searchValue)paramsUrl= paramsUrl.set('search',searchValue);
  //   return this.http
  //   .get<User[]>(environment.apiUrl + '/trips',{params:paramsUrl});
  // }
}
