import { Component, OnInit } from '@angular/core';
import { CreatePlaceRequest } from 'src/app/models/Creat-place-request';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';
import { QimgImage } from '../../models/qimg-image';
/* import { PictureProvider } from '../../services/picture/picture.service'; */
/* import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; */
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.page.html',
  styleUrls: ['./create-place.page.scss'],
})
export class CreatePlacePage implements OnInit {
constructor(
    private placeService: PlaceService,
    private router: Router,
/*     private pictureService: PictureProvider, */
    /* private camera: Camera */ ) { }
createPlaceRequest: CreatePlaceRequest = {name: '', description: '', location : '[46.453377, 6.893891]', tripHref : '/api/trips/4906251d-9909-46b6-8973-25ab690329df', tripId : '4906251d-9909-46b6-8973-25ab690329df', pictureUrl: '' };
picture: QimgImage;





    savePlace() {
    this.placeService.createPlace(this.createPlaceRequest).subscribe((res) => {
      this.router.navigateByUrl('trip-list');
    });
  }

 takePicture() {

  /* const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
};

  this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 const base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
}); */
/*   this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    }); */
  }
  ngOnInit() {
  }

}
