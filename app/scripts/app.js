'use strict';

/**
  * @ngdoc overview
  * @name getRichFrontendApp
  * @description
  * # getRichFrontendApp
  *
  * Main module of the application.
 */
var app = angular.module('getRichFrontendApp', ['n3-line-chart', 'ngAnimate',
'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize',
'ngTouch', 'tc.chartjs', 'angulartics', 'angulartics.google.analytics']);

app.config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  }).when('/tweet', {
    templateUrl: 'views/tweet.html',
    controller: 'TweetCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
