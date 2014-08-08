var se = angular.module('se', ['ngRoute', 'google-maps']);
var _analytics = false;

se.run(function() {
	if(_analytics) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-53624111-1', 'auto');
		ga('send', 'pageview');
	}
});

se.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'templates/home.html'
		}).
		when('/class', {
			controller: 'MapController',
			templateUrl: 'templates/class.html'
		}).
		when('/faq', {
			controller: 'MapController',
			templateUrl: 'templates/faq.html'
		}).
		when('/news', {
			templateUrl: 'templates/news.html'
		}).
		when('/media', {
			templateUrl: 'templates/media.html'
		}).
		when('/about', {
			templateUrl: 'templates/about.html'
		}).
		when('/contact', {
			controller: 'MapController',
			templateUrl: 'templates/contact.html'
		}).
		otherwise({
			redirectTo: '/'
		})
}]);

se.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
	$scope.is = function(path) {
		if(!path) {
			return true;
		}
		else if(path === $location.path()) {
			return true;
		}
		else {
			return false;
		}
	};
}]);

se.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(path) {
		return path === $location.path();
	};

	$scope.$on('$routeChangeSuccess', function () {
		if(_analytics) {
			ga('send', 'event', 'navigation', 'to', $location.path());
		}
	});
}]);

se.controller('MapController', ['$scope', function($scope) {
	// public properties.
	$scope.map = {
		center: {
			latitude: 37.859700,
			longitude: -122.292530
		},
		zoom: 19
	};

	$scope.show = false;

	// public methods.
	$scope.showMap = function() {
		$scope.show = !$scope.show;
	};
}]);
