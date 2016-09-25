describe('Unit testing pet-list directive', function() {
    var $compile,
        $rootScope;
    /**
     Load related modules 
     template module contains the html templates 
    */
    beforeEach(module('petList'));
    beforeEach(module('templates'));
    beforeEach(module('core'));


    /** Store references to $rootScope and $compile
  so they are available to all tests in this describe block*/
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should contain the test data after replacing it with html ', function() {
        /**Compile a piece of HTML containing the directive*/
        $rootScope.petData = [{
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
        }, {
            "name": "Steve",
            "gender": "Male",
            "age": 45,
            "pets": null
        }, {
            "name": "Fred",
            "gender": "Male",
            "age": 40,
            "pets": [{
                "name": "Tom",
                "type": "Cat"
            }, {
                "name": "Max",
                "type": "Cat"
            }, {
                "name": "Sam",
                "type": "Dog"
            }, {
                "name": "Jim",
                "type": "Cat"
            }]
        }, {
            "name": "Samantha",
            "gender": "Female",
            "age": 40,
            "pets": [{
                "name": "Tabby",
                "type": "Cat"
            }]
        }, {
            "name": "Alice",
            "gender": "Female",
            "age": 64,
            "pets": [{
                "name": "Simba",
                "type": "Cat"
            }, {
                "name": "Nemo",
                "type": "Fish"
            }]
        }];

        var element = $compile("<pet-list gender-type='Male' sub-category-type='pets' sub-category-value='Cat' pet-list='petData'></pet-list>>")($rootScope);

        // fire all the watches
        $rootScope.$digest();
       /**Check that the compiled element contains the details of the 
	    cats with Male owner .*/
	
        expect(element.html()).toContain("Jim");
        expect(element.html()).toContain("Max");
        expect(element.html()).toContain("Tom");
        /**It should not contain the cats with female owner as we are filtering based 
        on male owner 
        */
        
        expect(element.html()).not.toContain("Simba");
        expect(element.html()).not.toContain("Tabby");
    });
});