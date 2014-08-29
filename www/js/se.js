var se = angular.module('se', ['ngRoute', 'google-maps']);

se.run(['analytics', function(analytics) {
	if(analytics.on) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-53624111-1', 'auto');
		ga('send', 'pageview');
	}
}]);

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
		});
}]);

se.factory('analytics', function() {
	return { on: false };
});

se.controller('NavController', ['$scope', '$location', '$anchorScroll', 'analytics', function($scope, $location, $anchorScroll, analytics) {
	$scope.go = function(id) {
		$location.hash(id);
		$anchorScroll();
	};

	$scope.isActive = function(path) {
		return path === $location.path();
	};

	$scope.$on('$routeChangeSuccess', function () {
		if(analytics.on) {
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
