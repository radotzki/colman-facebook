(function() {

	'use strict';

	angular.module('app.feed')
	.config(function ($stateProvider) {
		$stateProvider

		.state('feed', {
			url: '/feed',
			templateUrl: 'app/feed/indexFeed.html',
			controller: 'IndexFeed as vm'
		});

	});
})();