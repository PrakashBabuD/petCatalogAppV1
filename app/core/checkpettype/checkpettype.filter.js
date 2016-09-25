'use strict';

/**
checkpettype filter 
It accepts the list of objects containing the pet data 
and filters out only matching required gender of owner and 
subcategory of pet type  
For Example : 
checkpettype:{gender:'Male',subcat:'pets',subcatType:'Cat',subcatSort:'ASC'}
checkpettype:{gender:'Femal',subcat:'pets',subcatType:'Dog',subcatSort:'DESC'}
*/
angular.
module('core').
filter('checkpettype', ['$filter',function($fiter) {
    var $filter=$fiter,sortDir;
    return function(value, propertyName) {
        /**
            Structure of propertyName is as below 
            propertyName = {
            gender: 'Male',
            subcat: 'pets',
            subcatType: 'Cat',
            subcatSort:'ASC'
        };
        */
        
        var arrayList = [];
		/**
		Loop through the objects and find objects matching the gender 
		*/
        angular.forEach(value, function(val) {
            if (val['gender'] === propertyName.gender)
				/**
				Loop through the nested objects  and find objects matching the pet type 
				*/
                angular.forEach(val[propertyName.subcat], function(v) {
                    if (propertyName['subcatType'] == v.type) {
                        arrayList.push(v)
                    }
                });
        });
        /**
        Applying the sort using the orderBy
        */
        sortDir=(propertyName['subcatSort']=='ASC')?false:true;
        arrayList=$filter('orderBy')(arrayList,'name', sortDir);
        return arrayList;
    }
}]);

