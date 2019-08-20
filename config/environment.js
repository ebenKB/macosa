'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'macosa',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    'ember-cli-notifications': {
      includeFontAwesome: true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiEndpoint = 'https://macosa-app.herokuapp.com';
    // ENV.apiEndpoint = 'https://macosa2-api.herokuapp.com';
    ENV.apiNamespace = 'api/v1';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.apiEndpoint = 'https://macosa-app.herokuapp.com';
    ENV.apiNamespace = 'api/v1';
  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: '/',
    routeIfAlreadyAuthenticated: 'authenticated',
  };

  return ENV;
};
