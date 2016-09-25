'use strict';
/**
Define Pet factory
*/
angular.
  module('core.pet').
  factory('Pet', ['$resource',
    function($resource) {
      return $resource('http://agl-developer-test.azurewebsites.net/people.json', {}, {
        query: {
		  method: 'JSONP',
		  params: {callback: 'JSON_CALLBACK'},
          isArray: true
        }
      });
    }
  ]);
