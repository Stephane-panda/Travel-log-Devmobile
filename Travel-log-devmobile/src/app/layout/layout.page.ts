import { Component} from '@angular/core';

// Interface that represent a tab data.
export interface PageTab {
  title: string; // The title of the tab in the tab bar
  icon: string; // The icon of the tab in the tab bar
  path: string; // The route's path of the tab to display
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {
  tabs: PageTab[];

  constructor() { this.tabs = [
      { title: 'Nouvelle Balades', icon: 'add', path: 'create-trip' },
      { title: 'Cartes des parcs', icon: 'map', path: 'places-map' },
      { title: 'Listes des balades', icon: 'list', path: 'trip-list' },
    ]; }


}
