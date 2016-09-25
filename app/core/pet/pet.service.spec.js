'use strict';

/**
Unit testing for Pet factory
*/
describe('Unit testing of the Pet factory', function() {
    var $httpBackend,
        Pet,
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

    /**Add a custom equality tester before each test*/
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    /** Load the module that contains the Pet service before each test*/
    beforeEach(module('core.pet'));

    /**Instantiate the service and "train" $httpBackend before each test*/
    beforeEach(inject(function(_$httpBackend_, _Pet_) {
        $httpBackend = _$httpBackend_;
        $httpBackend
            .expectJSONP('http://agl-developer-test.azurewebsites.net/people.json?callback=JSON_CALLBACK')
            .respond(petData);
        Pet = _Pet_;
    }));

    /** Verify that there are no outstanding expectations or requests after each test*/
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the pet data from http://agl-developer-test.azurewebsites.net/people.json', function() {
        var pets = Pet.query();
        expect(pets).toEqual([]);
        /**
         $httpBackend.flush() is needed because normally $http 
         is asynchronous, but we want to execute our test in a synchronous fashion
        */
        $httpBackend.flush();
        expect(pets).toEqual(petData);
    });

});