'use strict';


angular.module('dungeonator.controllers', ['ngResource', 'ngRoute'])
	.controller('IndexController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}])
	.controller('LocationsController', ['$scope', '$resource', '$route', function($scope, $resource, $route){
		$scope.locations = new Object;

		$scope.addLocation = function(locationName){
			chrome.storage.sync.get({locations:[]}, function(result){
				var locations = result.locations;
				var newLoc = {
					id: locations.length + 1,
					name: locationName,
					people: [ {
						personName: String,
						personrace: String,
						personHP: Number,
						personDescription: String,
						personItems: []
					}
				],
				quests:[{
					questName: String,
					questGiver: String,
					questTasks: [String]
				}],
				map: String,
				overview: String
			};
			locations.push(newLoc);
			chrome.storage.sync.set({locations: locations}, function(){
				chrome.storage.sync.get('locations', function(result){
					$scope.locations = result.locations;
				});
			});
			});
		};

		// INIT locations
		$scope.initLocations = function(){
			chrome.storage.sync.get({locations: []}, function(results){
				$scope.locations = results.locations;
			});
		};

		$scope.initLocations();
	}])
	.controller('ChaptersController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}])
	.controller('CharactersController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}]);
