import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { TripService } from 'src/app/services/trip.service';
import { Trip } from 'src/app/models/trip';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})

export class UserAccountPage {
  user: User;
  trips: Trip[];
  userNewName: User;
  nameNew: string;
  public show: boolean = false;

  constructor(
    private authService: AuthService,
    private tripService: TripService,
    private userService: UserService,
    public alertController: AlertController) { }

  ionViewDidEnter() {
    this.authService.getUser().subscribe(user => {
      this.user = user
      this.tripService.getTripsByUserId(this.user.id).subscribe(trips => {
        this.trips = trips;
        this.getLastTrip();
      })
    });
  }

  getTripsFromUser() {
    this.trips.filter(function (trips) {
      return console.log(trips.userId == this.user.id);
    });
  }

  getLastTrip() {
    this.trips.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      else if (a.createdAt === b.createdAt) {
        return 0;
      }
      else {
        return 1;
      }
    });
  }

  toggleForm() {
    this.show = !this.show;
    return;
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Surppimer le compte?',
      message: 'La suppression d’une balade est définitive.',
      buttons: ['Supprimer','Annuler']
    });

    await alert.present();
  }

  updateUserName(form: NgForm) {
    if (form.valid) {
      this.userNewName = new User();
      this.userNewName.name = this.nameNew;
      console.log("New name:" + this.userNewName);
      this.userService.changeName(this.userNewName, this.user.id).subscribe(user => {
        this.authService.updateUser(user).subscribe();
        this.toggleForm();
      }, err => {
        console.warn('Could not change user name');
      });

    }
  }
  
}