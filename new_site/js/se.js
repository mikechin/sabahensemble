var se = angular.module('se', ['ngRoute']);

se.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'templates/home.html'
		}).
		when('/class', {
			templateUrl: 'templates/class.html'
		}).
		when('/faq', {
			templateUrl: 'templates/faq.html'
		}).
		when('/news', {
			templateUrl: 'templates/news.html'
		}).
		when('/photos', {
			templateUrl: 'templates/photos.html'
		}).
		when('/about', {
			templateUrl: 'templates/about.html'
		}).
		when('/contact', {
			templateUrl: 'templates/contact.html'
		}).
		otherwise({
			redirectTo: '/'
		})
}]);
