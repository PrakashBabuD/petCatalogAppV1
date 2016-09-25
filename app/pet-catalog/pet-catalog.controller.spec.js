'use strict';
/**
Unit testing of petCatalogContoller
*/
describe('Unit testing of petCatalogController', function() {
    var $controller, Pet, $scope = {},
        $httpBackend,
        petData = [{
            "name": "Bob",
            "gender": "Male",
            "age": 23,
            "pets": [{
                "name": "Garfield",
                "type": "Cat"
            }, {
                "name": "Fido",
                "type": "Dog"
            }]
        }, {
            "name": "Jennifer",
            "gender": "Female",
            "age": 18,
            "pets": [{
                "name": "Garfield",
                "type": "Cat"
            }]
        }];
    /**Load the module that contains the Pet service and the petCatalogController */
    beforeEach(module('petCatalog'));
    beforeEach(module('core.pet'));

    /** Add a custom equality tester before each test*/
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

     /**Inject controller ,instantiate the service and "train" $httpBackend before each test*/
    beforeEach(inject(function(_$controller_, _$httpBackend_, _Pet_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $httpBackend.expectJSONP('http://agl-developer-test.azurewebsites.net/people.json?callback=JSON_CALLBACK').respond(petData);
        Pet = _Pet_;
    }));

    it('should fetch pet data using the Pet service', function() {
        var ctrl = $controller('petCatalogController', {
            $scope: $scope,
            Pet: Pet
        });
        expect($scope.petData).toEqual([]);
        $httpBackend.flush();
        expect($scope.petData).toEqual(petData);
    });
});