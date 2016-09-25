'use strict';

/**
config block of the application .
The routes are defined here 
*/
angular.
module('petCatalogApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/pets', {
            templateUrl: 'pet-catalog/pet-catalog.tmpl.html',
            controller: 'petCatalogController'
        }).
		/**
		This is the default root of the application 
		*/
        otherwise('/pets');
    }
]);