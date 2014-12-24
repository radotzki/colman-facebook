(function() {
	'use strict';

	angular
	.module('app.profile')
	.controller('ShowProfile', ShowProfile);

	/* @ngInject */
	function ShowProfile($scope, $stateParams, profileSvc) {
		/*jshint validthis: true */
		var vm = this;
		vm.user = {};

		activate();

		function activate() {
			getUser();
		}

		function getUser () {
			profileSvc.getUser($stateParams.id).then(function(){
				vm.user = profileSvc.getResult();
				vm.user.cityCordinateString = vm.user.cityCordinate.lat + ', ' + vm.user.cityCordinate.lng;
				vm.user.picture = 'assets/images/' + vm.user.picture;
			});
		}

	}
})();