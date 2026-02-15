import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

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
    path: 'dragonball-super',
    component: DragonballSuperPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
