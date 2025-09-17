const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  remotes: {
    'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
    'mfe-tools': 'http://localhost:4202/remoteEntry.json',
    'mfe-assignments': 'http://localhost:4203/remoteEntry.json',
    'mfe-historically': 'http://localhost:4204/remoteEntry.json',
    'mfe-general': 'http://localhost:4205/remoteEntry.json',
  },
  exposes: {
  },
  
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    '@primeuix/themes',
    '@primeuix/themes/aura',
    '@primeuix/styles',
    '@primeuix/utils',
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
  
});
