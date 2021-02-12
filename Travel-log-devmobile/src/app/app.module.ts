import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: "fr" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }