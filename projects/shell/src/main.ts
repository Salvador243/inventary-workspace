import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
  'mfe-tools': 'http://localhost:4202/remoteEntry.json',
  'mfe-assignments': 'http://localhost:4203/remoteEntry.json',
  'mfe-historically': 'http://localhost:4204/remoteEntry.json',
  'mfe-general': 'http://localhost:4205/remoteEntry.json',
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
