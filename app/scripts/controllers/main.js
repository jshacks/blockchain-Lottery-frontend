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
    $rootScope.light1 = "active";
    $rootScope.light2 = "iactive";

    $scope.lots = [{name: 'aurel', status: 'off', partHref: "https:\\www.google.com"},{name: "numarul 2", status: '78'}]
    $scope.qrHash = "asd";




    //192.168.1.58/api/signup
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.get = function(){

          $http({
            method: 'GET',
            url: 'http://demo8719677.mockable.io/getaddress'
          }).then(function successCallback(response) {
            //$scope.lots = response.data;
            $scope.qrHash = response.data.address;

            console.log("am primit asta");
            console.log(response.data.address);
          }, function errorCallback(response) {
            console.log(response);
          });

    }
    $scope.get();

    $scope.post = function(){
      console.log('click');
        //var data = {email: "email@service.com", password: "melciScoiciRaciCraci"};

        /*
        var data = $.param({
              email: "email@service.com",
              password: "melciScoiciRaciCraci"
        });*/
        /*
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }*/

        var req = {
            method: 'POST',
            url: 'http://192.168.1.58:8080/api/signup',
            data: {email: "email3@service.com", password: "melciScoiciRaciCraci"}
            }
        $http(req).then(function(response){console.log(response); console.log('Blanao');}, function(response){console.log(response); console.log('NO POST')});

        /*
        $http.post('192.168.1.58:8080/api/signup', data, config)
              .then(function(){console.log("success")},function(){console.log('FAIL');})*/

   }



  });
