var se = angular.module('se', ['ngRoute', 'google-maps']);

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

se.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(path) {
		return path === $location.path();
	};
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
