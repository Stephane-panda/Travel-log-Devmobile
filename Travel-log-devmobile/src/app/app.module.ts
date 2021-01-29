import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

import { IonicStorageModule } from '@ionic/storage';

//Import pour la géolocalisation
import { Geolocation } from "@ionic-native/geolocation/ngx";



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation, //Module de geolocalisation
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
