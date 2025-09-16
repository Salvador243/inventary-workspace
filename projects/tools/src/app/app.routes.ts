import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./presentation/layouts/home-layout/home.layout').then(m => m.HomeLayoutComponent)
    }
];
