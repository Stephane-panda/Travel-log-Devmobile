import { Component, OnInit } from '@angular/core';

//Import pour la geolocalisation et la geoposition
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';


//Import pour la map leaflet
import * as Leaflet from 'leaflet';



@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {


  constructor(private geolocalition: Geolocation) { }

  ngOnInit() {
    //Methode pour récupérer la position de l'utilisateur à l'instant T
    this.geolocalition.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      console.log(`L'utilisateur se trouve à la position suivante : ${coords.longitude}, ${coords.latitude}`);
    }).catch(err => {
      console.warn(`Impossible d'indiquer la position de l'utilsisateur car : ${err.message}`)
    })
  
  }
  //Methode pour la map
  map2: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map2 = new Leaflet.Map('mapId2').setView([12.972442, 77.594563], 13);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map2);

    // const markPoint = Leaflet.marker([12.972442, 77.594563]);
    // markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
    // this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map2.remove();
  }
}