import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'create-trip',
        loadChildren: () =>
          import('./create-trip/create-trip.module').then(
            (m) => m.CreateTripPageModule
          ),
      },
      {
        path: 'my-account',
        loadChildren: () =>
          import('./user-account/user-account.module').then(
            (m) => m.UserAccountPageModule
          ),
      },
      {
        path: 'trip-list',
        loadChildren: () =>
          import('./trip-list/trip-list.module').then(
            (m) => m.TripListPageModule
          ),
      },
      {
        path: 'one-trip/:id',
        loadChildren: () => import('./one-trip/one-trip.module').then(m => m.OneTripPageModule)
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
    loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountPageModule)
  },
  {
    path: 'create-place',
    loadChildren: () => import('./create-place/create-place.module').then(m => m.CreatePlacePageModule)
  },  {
    path: 'create-place-start',
    loadChildren: () => import('./create-place-start/create-place-start.module').then( m => m.CreatePlaceStartPageModule)
  },
  {
    path: 'create-place-end',
    loadChildren: () => import('./create-place-end/create-place-end.module').then( m => m.CreatePlaceEndPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }