/* eslint-env node */
'use strict';

module.exports = function (environment) {
    let ENV = {
        modulePrefix: 'ghost-admin',
        environment,
        cdnUrl: process.env.GHOST_CDN_URL || '',
        editorUrl: process.env.EDITOR_URL || '',
        rootURL: '',
        locationType: 'trailing-hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
            },
            // @TODO verify that String/Function need to be enabled
            EXTEND_PROTOTYPES: {
                Date: false,
                Array: true,
                String: true,
                Function: false
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created

            // override the default version string which contains git info from
            // https://github.com/cibernox/git-repo-version. Only include the
            // `major.minor` version numbers
            version: require('../package.json').version.match(/^(\d+\.)?(\d+)/)[0]
        },

        apollo: {
            apiURL: '/ghost/api/v2/admin/vertretungsplan/graphql',
            // Optionally, set the credentials property of the Fetch Request interface
            // to control when a cookie is sent:
            //requestCredentials: 'include', // other choices: 'same-origin', 'omit'
            //http://api:3000 or ws//:api:3000
        },

        'ember-simple-auth': { },

        moment: {
            includeTimezone: 'all',
            includeLocales: ['de']
        },
        
        'ember-websockets': {
            socketIO: true
        },

        '@sentry/ember': {
            disablePerformance: true,
            sentry: {}
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;

        // Enable mirage here in order to mock API endpoints during development
        ENV['ember-cli-mirage'] = {
            enabled: false
        };
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.rootURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        ENV.APP.autoboot = false;

        // Withuot manually setting this, pretender won't track requests
        ENV['ember-cli-mirage'] = {
            trackRequests: true
        };
    }

    return ENV;
};
