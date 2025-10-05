import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { AdminLayoutComponent } from './presentation/layouts/admin/admin.layout';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

export const routes: Routes = [
	{
		path: 'auth',
		canActivate: [UnauthGuard],
		loadChildren: () => loadRemoteModule('mfe-authenticator', './routes').then((m) => m.routes),
	},
	{
		path: 'admin',
		canActivate: [AuthGuard],
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
