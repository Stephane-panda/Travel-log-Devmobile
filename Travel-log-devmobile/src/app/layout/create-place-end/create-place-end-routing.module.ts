import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlaceEndPage } from './create-place-end.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlaceEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlaceEndPageRoutingModule {}
