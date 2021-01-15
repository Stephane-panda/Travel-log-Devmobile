import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaladeListPage } from './balade-list.page';

const routes: Routes = [
  {
    path: '',
    component: BaladeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaladeListPageRoutingModule {}
