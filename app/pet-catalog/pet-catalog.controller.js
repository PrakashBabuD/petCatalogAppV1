'use strict';
/**Define petCatalogController
*/
angular.module('petCatalog')
.controller('petCatalogController', ['$scope', 'Pet', function($scope, Pet) {
        $scope.petData = Pet.query();
    }])
