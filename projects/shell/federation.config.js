const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
	remotes: {
		'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
		'mfe-tools': 'https://integradora-tools-mfe.vercel.app/remoteEntry.json',
		'mfe-historically': 'https://integradora-historically-mfe.vercel.app/remoteEntry.json',
		'mfe-assignments': 'https://integradora-assignments-mfe.vercel.app/remoteEntry.json',
		'mfe-general': 'https://integradora-general-mfe.vercel.app/remoteEntry.json',
	},
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
