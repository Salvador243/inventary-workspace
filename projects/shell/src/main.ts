import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

console.log(`🚀 Shell App [RUNTIME]: ${environment.production ? 'PRODUCTION' : 'DEVELOPMENT'}`);

// initFederation SIN argumentos usa la configuración de federation.config.js
initFederation()
	.catch((err) => console.error(err))
	.then((_) => import('./bootstrap'))
	.catch((err) => console.error(err));
