import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlaceStartPage } from './create-place-start.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlaceStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlaceStartPageRoutingModule {}
