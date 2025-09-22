export default [
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'out-tsc/**',
			'.angular/**',
			'coverage/**',
			'**/remoteEntry.js',
			'**/remoteEntry.js.map',
			'**/*.d.ts',
			'**/*.spec.ts',
			'**/*.test.ts',
			'**/karma.conf.js',
			'**/protractor.conf.js',
			'*.config.js',
			'!eslint.config.js',
		],
		rules: {
			'no-console': ['error', { allow: ['warn', 'error'] }],
			quotes: ['error', 'single', { allowTemplateLiterals: true }],
			'no-multiple-empty-lines': ['error', { max: 1 }],
			'no-unused-vars': 'error',
		},
	},
];
