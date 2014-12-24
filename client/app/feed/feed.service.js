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
			getResult: getResult
		};
		return service;


		function index() {
			return $http.get('/api/posts').success(function(data) {
				result = data;
			});
		}

		function getResult () {
			return result;
		}

	}
})();