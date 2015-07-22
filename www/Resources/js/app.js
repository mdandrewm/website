'use strict';

/* App Module */

var McCurryApp = angular.module('McCurryApp', [
  'ngRoute',
  'McCurryControllers',
  'McCurryServices'
]);

McCurryApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider
		.when('/Home', {
			templateUrl: 'partials/news-partial.html',
			controller: 'NewsCtrl'
		})
		.when('/Videos', {
			templateUrl: 'partials/videos-partial.html',
			controller: 'VideosCtrl'
		})
		.when('/Blog', {
			templateUrl: 'partials/blog-partial.html',
			controller: 'BlogCtrl'
		})
		.when('/About', {
			templateUrl: 'partials/about-partial.html',
			controller: 'AboutCtrl'
		})
		.otherwise({
			redirectTo: '/Home'
		});
  }]);