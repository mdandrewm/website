'use strict';

/* App Module */

var McCurryApp = angular.module('McCurryApp', [
  'ngRoute',
  'McCurryControllers'
]);

McCurryApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
		.when('/Home', {
			templateUrl: 'Resources/partials/home-partial.html',
			controller: 'HomeCtrl'
		})
		.when('/Videos', {
			templateUrl: 'Resources/partials/videos-partial.html',
			controller: 'VideosCtrl'
		})
		.when('/Blog', {
			templateUrl: 'Resources/partials/blog-partial.html',
			controller: 'BlogCtrl'
		})
		.when('/About', {
			templateUrl: 'Resources/partials/about-partial.html',
			controller: 'AboutCtrl'
		})
		.otherwise({
			redirectTo: '/Home'
		});
  }]);