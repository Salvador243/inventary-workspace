const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

// Detectar entorno basado en NODE_ENV
const isProduction = process.env['NODE_ENV'] === 'production';

// Remotes según el entorno
const remotes = {
	'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
	'mfe-tools': 'https://integradora-tools-mfe.vercel.app/remoteEntry.json',
	'mfe-historically': 'https://integradora-historically-mfe.vercel.app/remoteEntry.json',
	'mfe-assignments': 'https://integradora-assignments-mfe.vercel.app/remoteEntry.json',
	'mfe-general': 'https://integradora-general-mfe.vercel.app/remoteEntry.json',
}

console.log(`🚀 Federation Config [BUILD]: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);

console.log(`🚀 process.env['NODE_ENV'] ${process.env['NODE_ENV']}`);


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
