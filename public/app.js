'use strict';


var app = angular.module('shoppingCart', [
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'itemListCtrl'
        })
    .otherwise({
        redirectTo: '/'
    });
}]);
