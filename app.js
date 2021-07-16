(function(){
    'use strict';
   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.controller("MySecondController",MySecondController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

// function MyFirstController($scope,$filter, $timeout){
// $scope.name = 'malaya';

// }
// function MySecondController($scope,$filter, $timeout){
//     //try by commenting this line
//     $scope.name = 'Raja';

// }

// function MyFirstController($scope,$filter, $timeout){
//     this.name = 'malaya';
    
//     }
//     function MySecondController($scope,$filter, $timeout){
//         //try by commenting this line
//         this.name = 'Raja';
    

function MyFirstController($scope,$filter, $timeout){
    $scope.parentvalue = 1;
    $scope.pc = this;
    $scope.pc.parentvalue = 1;

    }
    MySecondController.$inject = ['$scope','$filter','$timeout'];
    function MySecondController($scope,$filter, $timeout){
        //try by commenting this line
        console.log("$scope.parentvlue :", $scope.parentvalue);
        console.log($scope);
        // here the second controller's scope will mask the parent value of the first controller
        $scope.parentvalue = 5;
        console.log("$scope.parentvlue :", $scope.parentvalue);
        console.log($scope);
        $scope.pc.parentvalue = 5;
        console.log("$scope.parentvlue :", $scope.pc.parentvalue);
        console.log($scope);
    
    }
//     }

})();

