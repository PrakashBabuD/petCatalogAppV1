// app.config.spec.js
describe('Unit testing app configuration', function() {
    /** Define global references for injections
	*/
    var $rootScope,
        route = 'pets',
        $location,
        $route;

    /**
	  Injecting the required modules ngRoute and petCatalogApp
	*/
    beforeEach(module('ngRoute'));
    beforeEach(module('petCatalogApp'));


    /**Inject and assign the $rout ,$location and $rootScope services.
     Put the template in template cache.*/
    beforeEach(inject(function(_$route_, _$location_, $templateCache, _$rootScope_, $httpBackend) {
        $location =_$location_,
        $route = _$route_;
        $rootScope = _$rootScope_;
		/**
		Avoid the call of the template html page .
		*/
        $httpBackend.expectGET('pet-catalog/pet-catalog.tmpl.html').respond(200);
        $templateCache.put('app/pet-catalog/pet-catalog.tmpl.html', '');
    }));

    
    it('should respond when the pets url is changed ', function() {
        $location.path('/pets');        
        expect($location.path()).toEqual('/pets');
		expect($route.current).not.toBeDefined();
		$rootScope.$digest();
		/**
		The $digest cycle starts as a result of a call to $rootScope.$digest()
		It is required before getting the current $route 
		*/
        expect($route.current.templateUrl).toEqual('pet-catalog/pet-catalog.tmpl.html');
    });


});