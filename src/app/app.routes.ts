import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';

export const routes: Routes = [
  {
    path: '',
    component: Counter
  },
  {
    path: 'hero',
    component: HeroPage
  },
  {
    path: 'dragonball',
    component: DragonballPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
