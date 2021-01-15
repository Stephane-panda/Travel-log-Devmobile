import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaladesListePage } from './balades-liste.page';

const routes: Routes = [
  {
    path: '',
    component: BaladesListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaladesListePageRoutingModule {}
