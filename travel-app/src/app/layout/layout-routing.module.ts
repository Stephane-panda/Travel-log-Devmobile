import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    // Default route
    path: "",
    component: LayoutPage,
    children: [
      {
        // Route that loads the CreateTrip module
        path: "create-balade",
        loadChildren: () =>
          import("./create-balade/create-balade.module").then(
            (m) => m.CreateBaladePageModule
          ),
      },
      {
        // Route that loads the PlacesMap module
        path: "balade-list",
        loadChildren: () =>
          import("./balade-list/balade-list.module").then(
            (m) => m.BaladeListPageModule
          ),
      },
      {
        // Route that loads the TripList module
        path: "mon-compte",
        loadChildren: () =>
          import("./mon-compte/mon-compte.module").then(
            (m) => m.MonComptePageModule
          ),
      },
      {
        path: "",
        redirectTo: "balade-list",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
