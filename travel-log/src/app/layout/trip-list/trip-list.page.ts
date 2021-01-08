import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.page.html',
  styleUrls: ['./trip-list.page.scss'],
})
export class TripListPage implements ViewDidEnter {
  constructor(
    private auth: AuthService,
    public http: HttpClient
  ) {}

  ionViewDidEnter(): void {
    const url = "https://devmobil-travel-log-api.herokuapp.com/api/trips";
    this.http.get(url).subscribe((trips) => {
      console.log(`Trips loaded`, trips);
    });
  }
}

