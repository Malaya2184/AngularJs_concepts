(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

function MyFirstController($scope,$filter, $timeout){
$scope.value = 0;
$scope.a= 3;
$scope.b= 4;
$scope.c= 5;
//implementd of $timeout
$scope.upcount = function () {
    $timeout(function(){
        $scope.value++;
        console.log('incremented by one');
        },1000);
    
};
$scope.updateC=function () {
    $scope.c = $scope.a*4;
};

// watcher 5
$scope.$watch("a", function(newvalue,oldvalue){
    if(newvalue != oldvalue){
        $scope.b = $scope.a*4;
    }
});
// watcher 6
$scope.$watch("b", function(newvalue,oldvalue){
    if(newvalue != oldvalue){
        $scope.c = $scope.b*4;
    }
});
// watcher 7 here we told the angular to watch this scope variable by using $watch
$scope.$watch("c", function(newvalue,oldvalue){
    if(newvalue != oldvalue){
        console.log("c is changed "+$scope.c);
    }
});

}

})();