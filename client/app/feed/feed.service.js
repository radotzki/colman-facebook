(function() {
    'use strict';

    angular
        .module('app.feed')
        .factory('feedSvc', feedSvc);

    /* @ngInject */
    function feedSvc($http) {
        var result;
        var service = {
            index: index,
            create: create,
            update: update,
            remove: remove,
            search: search,
            getResult: getResult
        };
        return service;


        function index() {
            return $http.get('/api/posts').success(function(data) {
                result = data;
            });
        }

        function create(newPost) {
            return $http.post('/api/posts', newPost).success(function(data) {
                result = data;
            });
        }

        function update(post) {
            return $http.put('/api/posts/' + post._id, post).success(function(data) {
                result = data;
            });
        }

        function remove(post) {
            return $http.delete('/api/posts/' + post._id).success(function(data) {
                result = data;
            });
        }

        function search(queryParam) {
            return $http({
                url: '/api/posts/search/',
                method: "GET",
                params: queryParam
            }).success(function(data) {
                result = data;
            });
        }

        function getResult() {
            return result;
        }

    }
})();
