'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */

angular.module('frontApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.x = 5;
    $scope.y = $scope.x + 7;
    $scope.lots = [{name: 'aurel', status: 'off', partHref: "https:\\www.google.com"},{name: "numarul 2", status: '78'}]





    //192.168.1.58/api/signup
    //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $http({
      method: 'GET',
      url: '/someUrl'
    }).then(function successCallback(response) {
      $scope.lots = response.data;
      console.log("am primit asta");
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });

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
