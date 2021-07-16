(function(){
    'use strict';
    var shoppinglist1= ['milk', 'milk cream', 'peanut butter', 'milk biscuit', 'milk bar', 'soap', 'hand wash', 'dish washer'];

    var shoppinglist2 = [
        {
            name: "milk",
            quantity : 5
        },
        {
            name: "milk poweder",
            quantity : 6
        },
        {
            name: "bread",
            quantity : 9
        },
        {
            name: "milk cookies",
            quantity : 51
        },
        {
            name: "milk bar",
            quantity : 17
        },
        {
            name: "soap",
            quantity : 56
        }
    ];
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

function MyFirstController($scope,$filter, $timeout){

    $scope.shoppinglist1 = shoppinglist1;
    $scope.shoppinglist2 = shoppinglist2;
    $scope.search = "";
}

})();

//Note :
// logic behind the  array filter
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const containLi = function(value){
//   return value.indexOf("li") != -1
// }
// const result = words.filter(containLi);

// console.log(result);
