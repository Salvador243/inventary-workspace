const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

// Detectar si estamos en producción
// Vercel y otros servicios de CI/CD establecen NODE_ENV=production
// También podemos detectar por el comando de Angular CLI
const isProduction = 
	process.env['NODE_ENV'] === 'production' || 
	process.env['npm_config_production'] === 'true' ||
	process.argv.includes('--configuration=production') ||
	process.argv.includes('--configuration') && process.argv[process.argv.indexOf('--configuration') + 1] === 'production';

// URLs de desarrollo (localhost)
const devRemotes = {
	'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
	'mfe-tools': 'http://localhost:4202/remoteEntry.json',
	'mfe-historically': 'http://localhost:4203/remoteEntry.json',
	'mfe-assignments': 'http://localhost:4204/remoteEntry.json',
	'mfe-general': 'http://localhost:4205/remoteEntry.json',
};

// URLs de producción (Vercel)
const prodRemotes = {
	'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
	'mfe-tools': 'https://integradora-tools-mfe.vercel.app/remoteEntry.json',
	'mfe-historically': 'https://integradora-historically-mfe.vercel.app/remoteEntry.json',
	'mfe-assignments': 'https://integradora-assignments-mfe.vercel.app/remoteEntry.json',
	'mfe-general': 'https://integradora-general-mfe.vercel.app/remoteEntry.json',
};

// Seleccionar remotes según el entorno
const remotes = isProduction ? prodRemotes : devRemotes;

console.log(`🚀 Federation Config - Mode: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
console.log('📦 Remotes:', remotes);

module.exports = withNativeFederation({
	remotes,
	exposes: {},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
	},

	skip: [
		'rxjs/ajax',
		'rxjs/fetch',
		'rxjs/testing',
		'rxjs/webSocket',
		'@primeuix/themes',
		'@primeuix/themes/material',
		'@primeuix/styles',
		'@primeuix/utils',
	],

	features: {
		ignoreUnusedDeps: true,
	},
});
