(function() {

	'use strict';

	angular.module('app.group')
	.config(function ($stateProvider) {
		$stateProvider

		.state('group', {
			url: '/group',
			templateUrl: 'app/group/showGroup.html',
			controller: 'ShowGroup as vm'
		});

	});
})();