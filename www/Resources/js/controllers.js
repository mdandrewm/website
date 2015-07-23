'use strict';

/* Controllers */
var McCurryControllers = angular.module('McCurryControllers', []);

McCurryControllers.controller('HeaderBarController',
	function($scope, $location){
		$scope.goTo = function (path) {
			$location.path(path);
		}
	}
);

McCurryControllers.controller('HomeCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
		$scope.RecentPosts = 
		[
			{
				Title: "The Site is Live!",
				Date: "January 30th, 2015",
				Content: " The site is live!  There's not much more to be said other than the fact that it's being hosted at the right web address.  Nothing else is currently functional, nor is all of the structure as I want it to be, but it is my own creation, so it is something I will slowly be improving!  Thanks for stopping by!"
			}
		];
		$scope.test = function()
		{
			//DatabaseService.testConnect();
		}
		$scope.viewLoaded=function(){
			$('.carousel ').carousel()
		}
	}
]);

McCurryControllers.controller('VideosCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);

McCurryControllers.controller('BlogCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);

McCurryControllers.controller('AboutCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);
