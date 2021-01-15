import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [

      {
        path: 'create-balade',
        loadChildren: () =>
          import('./create-balade/create-balade.module').then(
            (m) => m.CreateBaladePageModule
          ),
      },
      {
        path: 'mon-compte',
        loadChildren: () =>
          import('./mon-compte/mon-compte.module').then(
            (m) => m.MonComptePageModule
          ),
      },
      {
        path: 'balades-liste',
        loadChildren: () =>
          import('./balades-liste/balades-liste.module').then(
            (m) => m.BaladesListePageModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }
