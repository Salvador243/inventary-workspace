import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => loadRemoteModule('mfe-authenticator', './routes').then(m => m.routes)
  },
  {
    path: 'tools',
    loadChildren: () => loadRemoteModule('mfe-tools', './routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];