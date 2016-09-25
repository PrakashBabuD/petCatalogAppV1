'use strict';

/**
Define petList  directive 
*/

/**
The values in the isolatedScope shouls match with the 
kebab case of the attributes in the directive
*/
angular.module('petList')
.directive('petList',function(){
    return {
     restrict:'E',
     templateUrl:'pet-list/pet-list.tmpl.html',
     scope:{
        genderType:'@',
        subCategoryType:'@',
        subCategoryValue:'@',
        petList:'=',
        subcatSort:'@'
     }
    }
     


});