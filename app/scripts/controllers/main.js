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
    $scope.qrHash = "0x83aedfffd13c42b6e91ef6569e3823ed55ae58ce";

    //main page vars
    $scope.winDate = '15:00 GMT, October 22nd';
    $scope.prize = 0;
    $scope.price = 1.00;
    $scope.noTickets = 0;
    $scope.lastWinCounter = '5m 47s';
    $scope.lastWinnerHash = '0x83aedfffd13c42b6e91ef6569e3823ed55ae58ce';
    $scope.qrHref = "https:\\www.google.com";
    $scope.participantsCount = 2;


    //192.168.1.58/api/signup
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.getLastWinner = function(){

          $http({
            method: 'GET',
            url: 'http://138.68.105.52:8080/lastWinner'
          }).then(function successCallback(response) {

            $scope.lastWinnerHash = response.data;
            //$scope.winDate = response.data.winDate;

            console.log("am primit asta");
            console.log(response.data.address);
          }, function errorCallback(response) {
            console.log(response);
          });

    }
    $scope.getParticipantsCount = function(){

          $http({
            method: 'GET',
            url: 'http://138.68.105.52:8080/participantsCount'
          }).then(function successCallback(response) {

            $scope.participantsCount = response.data;
            //$scope.winDate = response.data.winDate;

            console.log("am primit asta");
            console.log(response.data.address);
          }, function errorCallback(response) {
            console.log(response);
          });

    }
    $scope.getParticipantsCount();

    setInterval(function(){
      $scope.getLastWinner();
      $scope.getParticipantsCount();
      $scope.noTickets = 10 - $scope.participantsCount;
      $scope.prize = $scope.participantsCount;
     }, 3000);



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
