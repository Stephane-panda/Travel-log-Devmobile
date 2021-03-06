import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserAccountPageRoutingModule } from './user-account-routing.module';
import { UserAccountPage } from './user-account.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccountPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UserAccountPage]
})
export class UserAccountPageModule { }