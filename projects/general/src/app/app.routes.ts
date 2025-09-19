import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'garage',
		loadComponent: () => import('./presentation/layouts/garage/garage.layout').then((m) => m.GarageLayoutComponent),
	}
];
