'use strict';

/**
 * @ngdoc overview
 * @name mediasportifApp
 * @description
 * # mediasportifApp
 *
 * Main module of the application.
 */
angular
  .module('mediasportifApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
