import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        loadComponent: () => import('./presentation/layouts/login-layout/login.layout').then(m => m.LoginLayoutComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];
