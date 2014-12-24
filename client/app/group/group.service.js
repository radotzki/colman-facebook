(function() {
	'use strict';

	angular
	.module('app.group')
	.factory('groupSvc', groupSvc);

	/* @ngInject */
	function groupSvc($http) {
		var result;
		var service = {
			getUsers: getUsers,
			getResult: getResult
		};
		return service;


		function getUsers() {
			return $http.get('/api/users/groupby/city').success(function(data) {
				result = data;
			});
		}

		function getResult () {
			return result;
		}

	}
})();