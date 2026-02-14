import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPage } from './pages/hero/hero-page';

export const routes: Routes = [
  {
    path: 'counter',
    component: Counter
  },
  {
    path: 'hero',
    component: HeroPage
  }
];
