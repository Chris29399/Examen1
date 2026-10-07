import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full',
  },
  {
    path: 'presentation',
    loadComponent: () => import('./presentation/presentation.page').then( m => m.PresentationPage)
  },
  {
    path: 'multiplication',
    loadComponent: () => import('./multiplication/multiplication.page').then( m => m.MultiplicationPage)
  },
  {
    path: 'equation',
    loadComponent: () => import('./equation/equation.page').then( m => m.EquationPage)
  },
];
