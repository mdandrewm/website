'use strict';

/* Controllers */
var omnigryphonControllers = angular.module('omnigryphonControllers', []);

omnigryphonControllers.controller('HeaderBarController',
	function($scope, $location){
		$scope.goTo = function (path) {
			$location.path(path);
		}
	}
);

omnigryphonControllers.controller('NewsCtrl', ['$scope','$routeParams','DatabaseService',
	function($scope,$routeParams,DatabaseService) {
		$scope.NewsStories = 
		[
			{
				Title: "The Site is Live!",
				Date: "January 30th, 2015",
				Content: " The site is live!  There's not much more to be said other than the fact that it's being hosted at the right web address.  Nothing else is currently functional, nor is all of the structure as I want it to be, but it is my own creation, so it is something I will slowly be improving!  Thanks for stopping by!"
			}
		];
		$scope.test = function()
		{
			DatabaseService.testConnect();
		}
	}
]);

omnigryphonControllers.controller('VideosCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);

omnigryphonControllers.controller('BlogCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);

omnigryphonControllers.controller('AboutCtrl', ['$scope','$routeParams',
	function($scope,$routeParams) {
	}
]);
