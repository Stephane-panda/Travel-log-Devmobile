import { Component, OnInit } from '@angular/core';

//Import pour la geolocalisation et la geoposition
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';


//Import pour la map leaflet
import * as Leaflet from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";



@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {


  constructor(private geolocalition: Geolocation) { }

  ngOnInit() { }

  //Methode pour la map
  map2: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    let blueIcon = Leaflet.icon({
      iconUrl: 'cerclebleu.png',
      iconSize:     [20, 20], // size of the icon
      iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
      popupAnchor:  [10, -8] // point from which the popup should open relative to the iconAnchor
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
      const markPoint2 = Leaflet.marker([46.515865, 6.622970]);
      markPoint2.bindPopup('<p>Parcours 1.</p>');
      const markPoint3 = Leaflet.marker([46.506860, 6.626348]);
      markPoint3.bindPopup('<p>Parcours 2.</p>');
      const markPoint4 = Leaflet.marker([46.536902, 6.638941]);
      markPoint4.bindPopup('<p>Parcours 3.</p>');
      const markPoint5 = Leaflet.marker([46.513588, 6.611101]);
      markPoint5.bindPopup('<p>Parcours 4.</p>');
      this.map2.addLayer(markPoint1);
      this.map2.addLayer(markPoint2);
      this.map2.addLayer(markPoint3);
      this.map2.addLayer(markPoint4);
      this.map2.addLayer(markPoint5);
    })
  }

  ionViewWillLeave() {
    this.map2.remove();
  }
}