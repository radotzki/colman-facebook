(function() {
	'use strict';

	angular
	.module('app.search')
	.controller('Search', Search);

	/* @ngInject */
	function Search(searchSvc) {
		/*jshint validthis: true */
		var vm = this;
		vm.query = {};
		vm.result;

		vm.search = search

		function search () {
			vm.query.name = vm.query.name ? vm.query.name : null;
			vm.query.phone = vm.query.phone ? vm.query.phone : null;
			vm.query.age = vm.query.age ? vm.query.age : null;

			searchSvc.search(vm.query).then(function() {
				vm.result = searchSvc.getResult();
			})
		}

	}
})();