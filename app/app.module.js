'use strict';

/**
	petCatalogApp is main module of the application 
	which loads other modules .
*/
angular.module('petCatalogApp', [
  'ngRoute',
  'core',
  'petCatalog',
  'petList'
]);