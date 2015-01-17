(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('MapHelper', MapHelper);

    /* @ngInject */
    function MapHelper($http, googleKey, googleGeocodeApi) {
        var result;
        var service = {
            fromAddressToCordinate: fromAddressToCordinate,
            getResult: getResult
        };
        return service;

        function fromAddressToCordinate(address) {
            return $http({
                url: googleGeocodeApi,
                method: "GET",
                params: {
                    address: address,
                    key: googleKey
                }
            }).success(function(data) {
                result = data.results.length > 0 ? data.results[0].geometry.location : null;
            });
        }

        function getResult() {
            return result;
        }

    }
})();
