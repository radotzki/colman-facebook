(function() {
	'use strict';

	angular
	.module('app.feed')
	.controller('IndexFeed', IndexFeed);

	/* @ngInject */
	function IndexFeed(feedSvc) {
		/*jshint validthis: true */
		var vm = this;
		vm.posts;

		activate();

		function activate() {
			getPosts();
		}

		function getPosts () {
			feedSvc.index().then(function() {
				vm.posts = feedSvc.getResult();
				console.log(vm.posts);
			})
		}

	}
})();