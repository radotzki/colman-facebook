(function() {
    'use strict';

    angular
        .module('app.core')
        .config(configState)
        .config(httpAuth)
        .run(stateChange);

    /* @ngInject */
    function configState($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/feed');
        $locationProvider.html5Mode(true);
    }

    /* @ngInject */
    function httpAuth($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }

    /* @ngInject */
    function stateChange($rootScope, $location, Auth) {
        $rootScope.$on('$stateChangeStart', function(event, next) {
            Auth.isLoggedInAsync(function(loggedIn) {
                if (next.authenticate && !loggedIn) {
                    $location.path('/login');
                }
            });
        });
    }


})();
