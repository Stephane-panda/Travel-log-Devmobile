import { Component } from '@angular/core';

export interface PageTab {
  title: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})

export class LayoutPage {
  tabs: PageTab[];

  constructor() {
    this.tabs = [
      { title: 'Balades', icon: 'map', path: 'trip-list' },
      { title: 'Ajouter une balade', icon: 'add-circle', path: 'create-trip' },
      { title: 'Mon compte', icon: 'person', path: 'my-account' },
    ];
  }
}