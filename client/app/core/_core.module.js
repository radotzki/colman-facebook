(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngCookies', 'ngResource', 'ngSanitize', 
        /*
         * 3rd Party modules
         */
        'btford.socket-io', 'ui.router', 'ui.bootstrap', 'ngMap', 'ngStorage'
    ]);
})();
