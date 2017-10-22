'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('AboutCtrl', function ($scope, $rootScope) {
    $rootScope.light1 = "iactive";
    $rootScope.light2 = "active";
    $rootScope.light3 = "iactive";

    $scope.newsMail = "    EMAIL";
  });
