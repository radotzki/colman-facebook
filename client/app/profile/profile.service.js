(function() {
	'use strict';

	angular
	.module('app.profile')
	.factory('profileSvc', profileSvc);

	/* @ngInject */
	function profileSvc($http) {
		var result;

		var service = {
			getUser: getUser,
			getResult: getResult
		};
		return service;


		function getUser(id) {
			return $http.get('/api/users/' + id).success(function(data) {
				result = data;
			});
		}

		function getResult () {
			return result;
		}

	}
})();