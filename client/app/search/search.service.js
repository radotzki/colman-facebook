(function() {
	'use strict';

	angular
	.module('app.search')
	.factory('searchSvc', searchSvc);

	/* @ngInject */
	function searchSvc($http) {
		var result;

		var service = {
			search: search,
			getResult: getResult
		};
		return service;


		function search(queryParam) {
			return $http({
				url: '/api/users/search/', 
				method: "GET",
				params: queryParam
			}).success(function(data) {
				result = data;
			});
		}

		function getResult () {
			return result;
		}

	}
})();