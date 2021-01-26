import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
     // Default route
    path: '',
    component: LayoutPage,
    children: [
      {
        // Route that loads the CreateTrip module
        path: 'create-trip',
        loadChildren: () =>
          import('./create-trip/create-trip.module').then(
            (m) => m.CreateTripPageModule
          ),
      },
      {
        // Route that loads the Account module
        path: 'my-account',
        loadChildren: () =>
          import('./user-account/user-account.module').then(
            (m) => m.UserAccountPageModule
          ),
      },
      {
        // Route that loads the TripList module
        path: 'trip-list',
        loadChildren: () =>
          import('./trip-list/trip-list.module').then(
            (m) => m.TripListPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'trip-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
