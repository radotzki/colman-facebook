(function() {
    'use strict';

    angular.module('facebookApp', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',
        'app.auth',
        'app.layout',
        'app.socket',
        /*
         * Feature areas
         */
        'app.feed',
        'app.profile',
        'app.group',
        'app.search'
    ]);

})();
