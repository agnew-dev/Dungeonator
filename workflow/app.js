'use strict';

angular.module('dungeonator', ['ngRoute', 'angularMoment', 'dungeonator.filters', 'dungeonator.services', 'dungeonator.directives', 'dungeonator.controllers'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'IndexController'});
		$routeProvider.when('/locations', {templateUrl: 'partials/locations.html', controller: 'LocationsController'});
		$routeProvider.when('/chapters', {templateUrl: 'partials/chapters.html', controller: 'ChaptersController'});
		$routeProvider.when('/characters', {templateUrl: 'partials/characters.html', controller: 'CharactersController'});
		$routeProvider.otherwise({redirectTo: '/index'});

	}]);
