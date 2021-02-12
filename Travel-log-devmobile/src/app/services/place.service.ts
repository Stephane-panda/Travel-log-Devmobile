import { Injectable } from '@angular/core';
import { Place } from '../models/Place';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';

import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  createPlace(createplaceRequest: CreatePlaceRequest) {

    return this.http.post(environment.apiUrl + '/places', createplaceRequest);
}}
