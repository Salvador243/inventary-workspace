import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'tools',
		loadComponent: () =>
			import('./presentation/layouts/home-layout/home.layout').then((m) => m.HomeLayoutComponent),
	},
	{
		path: 'categories',
		loadComponent: () =>
			import('./presentation/layouts/categories/categories.layout').then((m) => m.CategoriesLayoutComponent),
	},
	{
		path: '**',
		redirectTo: 'tools',
	}
]