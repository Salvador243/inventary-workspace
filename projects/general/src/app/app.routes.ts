import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./presentation/layouts/home/home.layout').then((m) => m.HomeLayoutComponent),
	},
	{
		path: 'garage',
		loadComponent: () => import('./presentation/layouts/garage/garage.layout').then((m) => m.GarageLayoutComponent),
	},
	{
		path: '**',
		redirectTo: '',
	}
];
