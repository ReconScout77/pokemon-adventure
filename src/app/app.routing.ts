import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';

import { MapComponent } from './map/map.component';
import { HabitatComponent } from './habitat/habitat.component';
import {HomeComponent} from './home/home.component';
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'habitat/:id',
    component: HabitatComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
