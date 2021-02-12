import { Component, OnInit } from '@angular/core';

//Import pour la geolocalisation et la geoposition
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';


//Import pour la map leaflet
import * as Leaflet from 'leaflet';
import { latLng, MapOptions, marker, Marker, tileLayer } from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
import { defaultIcon } from 'src/app/layout/places-map/default-marker';


@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {

  mapOptions: MapOptions;

  constructor(private geolocalition: Geolocation) {};

  ngOnInit() { }

  map2: Leaflet.Map;
  mapMarkers: Marker[];

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    let blueIcon = Leaflet.icon({
      iconUrl: 'cerclebleu.png',
      iconSize:     [20, 20],
      iconAnchor:   [0, 0],
      popupAnchor:  [10, -8]
  });
    this.geolocalition.getCurrentPosition().then((position: Geoposition) => {
      const coords2 = position.coords;
      this.map2 = new Leaflet.Map('mapId2').setView([coords2.latitude, coords2.longitude], 16);
      console.log(`L'utilisateur se trouve à la position suivante : ${coords2.latitude}, ${coords2.longitude}`);
      Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: 'edupala.com'
      }).addTo(this.map2);
       const markPoint1 = Leaflet.marker([coords2.latitude, coords2.longitude],{icon: blueIcon});
       markPoint1.bindPopup('<p>Je suis ici.</p>');
      this.map2.addLayer(markPoint1);
    })
    this.mapMarkers = [
      marker([ 46.451068, 6.895295 ], { icon: defaultIcon }),
      marker([ 46.431068, 6.795295 ], { icon: defaultIcon })
    ]
  }

  ionViewWillLeave() {
    this.map2.remove();
  }
}