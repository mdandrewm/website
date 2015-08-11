'use strict';

/* App Module */

var McCurryApp = angular.module('McCurryApp', [
  'ngRoute',
  'McCurryControllers',
  'ngAnimate',
  'ui.bootstrap'
]);

McCurryApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
		.when('/Home', {
			templateUrl: 'resources/partials/home-partial.html',
			controller: 'HomeCtrl'
		})
		.when('/Videos', {
			templateUrl: 'resources/partials/videos-partial.html',
			controller: 'VideosCtrl'
		})
		.when('/Blog/:year?/:month?/:day?/:title?', {
			templateUrl: 'resources/partials/blog-partial.html',
			controller: 'BlogCtrl'
		})
		.when('/About', {
			templateUrl: 'resources/partials/about-partial.html',
			controller: 'AboutCtrl'
		})
		.otherwise({
			redirectTo: '/Home'
		});
	
    //$locationProvider.html5Mode(true);
  }]);