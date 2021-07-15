(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

function MyFirstController($scope,$filter, $timeout){
$scope.counter = 0;

// $scope.upcounter= function(){
//     setTimeout(function(){
//         $scope.counter++;
//         console.log('counter incremented');
//         //manually tell the angular to include it to digest cycle
//         // $scope.$digest();
//         },2000);
    
// };

//it can be as by using $scope.$apply
// $scope.upcounter= function(){
//     setTimeout(function(){
//         $scope.$apply(function(){
//             $scope.counter++;
//             console.log('counter incremented');
//             });
        
//         },2000);
    
// };

//it can be as by using predefined angular method
$scope.upcounter= function(){
   
        $timeout(function(){
            $scope.counter++;
            console.log('counter incremented');
            },2000);
            
    }
}

})();

//use $apply or $timeout so that in angular application it can catch the errors otherwise it will not catch errors