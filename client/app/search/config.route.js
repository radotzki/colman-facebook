(function() {

	'use strict';

	angular.module('app.search')
	.config(function ($stateProvider) {
		$stateProvider

		.state('search', {
			url: '/search',
			templateUrl: 'app/search/show.html',
			controller: 'Search as vm'
		});

	});
})();