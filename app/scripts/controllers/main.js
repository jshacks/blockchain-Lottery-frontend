'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */

angular.module('frontApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {


    $scope.lots = [{name: 'aurel', status: 'off', partHref: "https:\\www.google.com"},{name: "numarul 2", status: '78'}]
    //$scope.qrHash = 'asd';
    $scope.qrHash = "xe09ec6179b8d9f056be503a55c0601e6c968208bf1c5f90658c7a16487785b33";

    //main page vars
    $scope.winDate = '15:00 GMT, October 22nd';
    $scope.prize = 0.042;
    $scope.price = 1.00;
    $scope.noTickets = 14;
    $scope.lastWinCounter = '5m 47s';
    $scope.lastWinnerHash = 'xe968208bf1c5f90658c7a16487785b3309ec6179b8d9f056be503a55c0601e6c';



    //192.168.1.58/api/signup
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.get = function(){

          $http({
            method: 'GET',
            url: 'http://demo8719677.mockable.io/getaddress'
          }).then(function successCallback(response) {

            $scope.qrHash = response.data.address;
            //$scope.winDate = response.data.winDate;

            console.log("am primit asta");
            console.log(response.data.address);
          }, function errorCallback(response) {
            console.log(response);
          });

    }
    $scope.get();

    $scope.post = function(){

        var req = {
            method: 'POST',
            url: 'http://192.168.1.58:8080/api/signup',
            data: {email: "email3@service.com", password: "melciScoiciRaciCraci"}
            }
        $http(req).then(function(response){console.log(response); console.log('Blanao');}, function(response){console.log(response); console.log('NO POST')});

   }





   $rootScope.light1 = "active";
   $rootScope.light2 = "iactive";
   $rootScope.light3 = "iactive";
  });
