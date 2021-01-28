import { Component, OnInit } from '@angular/core';
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';




@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {

  constructor(private geolocalition: Geolocation) { }


  ngOnInit() {
    //Methode pour récupérer la position de l'utilisateur à l'instant T
    //this.geolocalition.getCurrentPosition().then((position: Geoposition) => {
     this.geolocalition.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      console.log(`L'utilisateur se trouve à la position suivante : ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Impossible d'indiquer la position de l'utilsisateur car : ${err.message}`)
    })
   }

}