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
    $scope.itemname = "";
    //when addtoshoppinglist1 function will call then there is a incrment of 2 watchers will take place because on for the item and one for the index
    $scope.addtoshoppinglist1 = function () {

        shoppinglist1.push($scope.itemname);
        $scope.itemname = "";
        
    }
    $scope.removefromshoppinglist1 = function () {

        $scope.index = shoppinglist1.indexOf($scope.itemname);
        if ($scope.index > -1){
            //it will remove item and delete 2 watchers
            shoppinglist1.splice($scope.index,1);
        }
        $scope.itemname = "";
        
    }
    $scope.shoppinglist2 = shoppinglist2;

}

})();

//Note ;
