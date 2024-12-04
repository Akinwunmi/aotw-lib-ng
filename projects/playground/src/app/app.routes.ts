import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home').then(m => m.HOME_ROUTES),
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form').then(m => m.FORM_ROUTES),
  },
];
