describe('checkpettype filter', function() {

    var $filter;
    beforeEach(module('core'));

    /** Add a custom equality tester before each test*/
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });


    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));

    it('should return filtered result on passing test data', function() {
		/**
		Test data 
		*/
        var petData = [{
            "name": "Bob",
            "gender": "Male",
            "age": 23,
            "pets": [{
                "name": "Garfield",
                "type": "Cat"
            }, {
                "name": "Fido",
                "type": "Dog"
            },
            {
                "name": "Bobby",
                "type": "Cat"
            }
                    ]
        }, {
            "name": "Jennifer",
            "gender": "Female",
            "age": 18,
            "pets": [{
                "name": "Garfield",
                "type": "Cat"
            }]
        }];
		
        var checkpettype = $filter('checkpettype');
        var filteredObject =[ {
            "name": "Garfield",
            "type": "Cat"
        },
         {
                "name": "Bobby",
                "type": "Cat"
         }  ];
        
          var filteredObjectInAscendingOrder =[
         {
                "name": "Bobby",
                "type": "Cat"
         },
           {
            "name": "Garfield",
            "type": "Cat"
        }
          ];
        
        /**
        Testing whether the sort order is correctly.
        filter arguments depends on the structure of the propertyName
        refer to checkpettype.filter.js
        Now sorting the filter in ascending 
        */
        var filterArgs = {
            gender: 'Male',
            subcat: 'pets',
            subcatType: 'Cat',
            subcatSort:'ASC'
        };
        expect(checkpettype(petData, filterArgs)).not.toEqual(filteredObject);                       expect(checkpettype(petData, filterArgs)).toEqual(filteredObjectInAscendingOrder);
        
         /**
        Testing whether the sort order is correctly.
        Now sorting the filter in descending 
        */
        var filterArgs = {
            gender: 'Male',
            subcat: 'pets',
            subcatType: 'Cat',
            subcatSort:'DESC'
        };
         expect(checkpettype(petData, filterArgs)).toEqual(filteredObject); 
          expect(checkpettype(petData, filterArgs)).not.toEqual(filteredObjectInAscendingOrder);
        
        
        
        
        
    });
});