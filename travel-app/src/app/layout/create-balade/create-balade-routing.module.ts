import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBaladePage } from './create-balade.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBaladePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBaladePageRoutingModule {}
