'use strict';

angular.module('facebookApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, MapHelper) {
    $scope.user = {};
    $scope.user.picture = 'avatar1.jpg';
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        MapHelper.fromAddressToCordinate($scope.user.city).then(function(data){
          createUser(MapHelper.getResult());
        });
      }
    };

    function createUser(cityCordinate) {
      Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          city: $scope.user.city,
          cityCordinate: cityCordinate,
          phone: $scope.user.phone,
          age: $scope.user.age,
          picture: $scope.user.picture
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
    }

  });
