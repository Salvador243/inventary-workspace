import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'tools',
		loadComponent: () =>
			import('./presentation/layouts/tools/tools.layout').then(m => m.ToolsLayoutComponent),
	},
	{
		path: 'instances/:toolTypeId',
		loadComponent: () =>
			import('./presentation/layouts/tool-instances/tool-instances.layout').then(m => m.ToolInstancesLayoutComponent),
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