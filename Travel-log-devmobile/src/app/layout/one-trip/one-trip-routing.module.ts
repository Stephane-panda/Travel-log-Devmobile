import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneTripPage } from './one-trip.page';

const routes: Routes = [
  {
    path: '',
    component: OneTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneTripPageRoutingModule { }