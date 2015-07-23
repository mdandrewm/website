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
	}
]);

McCurryControllers.controller('HomeCarouselCtrl', ['$scope',
	function($scope) {
		$scope.myInterval = 5000;
		var slides = $scope.slides = [];
		slides.push(
			{
				mainImageSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
				captionImageSrc: "Resources/images/A.png",
				captionImageId: "carousel-logo",
				text:"Andrew McCurry",
				subtext:"3D Printing and Gaming Blog",
			},
			{
				mainImageSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
				text:"Some image of 3D printing",
				subtext:"Isn't it awesome?",
			},
			{
				mainImageSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
				text:"Idle Gaming!",
				subtext:"I can speak of this",
			}
		);
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
