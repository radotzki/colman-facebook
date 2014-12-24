(function() {
	'use strict';

	angular
	.module('app.group')
	.controller('ShowGroup', ShowGroup);

	/* @ngInject */
	function ShowGroup(groupSvc) {
		/*jshint validthis: true */
		var vm = this;
		vm.usersByCities;

		activate();

		function activate() {
			getUsers();
		}

		function getUsers () {
			groupSvc.getUsers().then(function() {
				vm.usersByCities = groupSvc.getResult();
				console.log(vm.usersByCities);
			})
		}

	}
})();