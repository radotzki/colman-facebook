'use strict';

angular.module('facebookApp')
.controller('NavbarCtrl', function ($scope, $location, Auth) {
  $scope.menu = [
  { 'title': 'Profile', 'link': '/profile/me' },
  { 'title': 'GroupBy City', 'link': '/group' },
  { 'title': 'Search', 'link': '/search' }
  ];

  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});