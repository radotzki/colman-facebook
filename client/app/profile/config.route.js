(function() {

	'use strict';

	angular.module('app.profile')
	.config(function ($stateProvider) {
		$stateProvider

		.state('profile', {
			url: '/profile/:id',
			templateUrl: 'app/profile/showProfile.html',
			controller: 'ShowProfile as vm'
		});

	});
})();