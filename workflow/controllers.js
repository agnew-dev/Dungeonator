'use strict';


angular.module('dungeonator.controllers', ['ngResource', 'ngRoute'])
	.controller('IndexController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}])
	.controller('LocationsController', ['$scope', '$resource', '$route', function($scope, $resource, $route){
		/* SCOPE VARIABLES */

		$scope.locations = new Object;
		$scope.currentLocation = null;

		/* UTILITY FUNCTIONS */
		$scope.reloadScope = function(){
			$route.reload();
		};

		/* LOCATION FUNCTIONS */

		// ADD new Location
		$scope.addLocation = function(){
			chrome.storage.sync.get({locations:[]}, function(result){
				var locations = result.locations;
				console.log($('#newLocationName').val());
				var locationName = $('#newLocationName').val();
				if(locationName === null || locationName === '')
					return;
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

					var currLoc = null;
					if($scope.currentLocation != null)
						currLoc = $scope.currentLocation;
					$scope.reloadScope();
					$scope.currentLocation = currLoc;
				});
			});
			});
		};

		//LOAD this Location
		$scope.loadLocation = function(locationId){
			chrome.storage.sync.get({locations: []}, function(results){

					for(var i=0; i < results.locations.length; i++){
						if(results.locations[i].id === locationId){
								$scope.currentLocation = results.locations[i];
								chrome.storage.sync.set({currentLocation: results.locations[i]}, function(){
									if(chrome.runtime.error){
										console.log("Runtime Error.");
									}

									$scope.reloadScope();
								});
						}
					}

			});
		};

		//REMOVE this Location
		$scope.removeLocation = function(locationId){
			chrome.storage.sync.get({locations:[]}, function(result){
				var locations = result.locations;
				var index = 0;

				while(index < locations.length){
					if(locations[index].id === locationId)
						break;
					index++;
				}

				locations.splice(index, 1);

				chrome.storage.sync.set({locations: locations}, function(){
					chrome.storage.sync.get('locations', function(result){
						$scope.locations = result.locations;

						var currLoc = null;
						if($scope.currentLocation != null)
							currLoc = $scope.currentLocation;
						chrome.storage.sync.set({currentLocation: null});
						$scope.reloadScope();

					});
				});
			});
		}

		// INIT locations
		$scope.initLocations = function(){
			chrome.storage.sync.get({locations: []}, function(results){
				$scope.locations = results.locations;
			});
			chrome.storage.sync.get('currentLocation', function(result){
				$scope.currentLocation = result.currentLocation;
			});
		};

		$scope.initCurrentLocation = function(){
			if($scope.currentLocation == null){
				console.log("NO LOCATION LOADED");
				return;
			}

		};


		/* INITIALIZATION */

		$scope.initLocations();
		$scope.initCurrentLocation();
	}])
	.controller('ChaptersController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}])
	.controller('CharactersController', ['$scope', '$resource', '$route', function($scope, $resource, $route){

	}]);
