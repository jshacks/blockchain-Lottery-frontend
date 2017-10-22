'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('FaqCtrl', function ($scope, $rootScope) {
    $rootScope.light1 = "iactive";
    $rootScope.light2 = "iactive";
    $rootScope.light3 = "active";
  });
