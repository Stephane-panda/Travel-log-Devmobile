import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }
  createPlace(createplaceRequest: CreatePlaceRequest) {
    return this.http.post(environment.apiUrl + '/places', createplaceRequest);
  }
}
