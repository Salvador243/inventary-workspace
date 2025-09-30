import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { AdminLayoutComponent } from './presentation/layouts/admin/admin.layout';

export const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => loadRemoteModule('mfe-authenticator', './routes').then((m) => m.routes),
	},
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
			{
				path: 'tools',
				loadChildren: () => loadRemoteModule('mfe-tools', './routes').then((m) => m.routes),
			},
			{
				path: 'assignments',
				loadChildren: () => loadRemoteModule('mfe-assignments', './routes').then((m) => m.routes),
			},
			{
				path: 'historically',
				loadChildren: () => loadRemoteModule('mfe-historically', './routes').then((m) => m.routes),
			},
			{
				path: 'general',
				loadChildren: () => loadRemoteModule('mfe-general', './routes').then((m) => m.routes),
			},
		]
	},
	{
		path: '**',
		redirectTo: 'auth',
	},
];
