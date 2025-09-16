import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
  'mfe-tools': 'http://localhost:4202/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
