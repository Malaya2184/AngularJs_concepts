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

$scope.obj = {
    a : 10,
    b : 20,
    c : 30
}
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
// watcher 11
// here true added to perform equality watch or deep watch so that watcher can track each element inside the object if you remove true value then it will watch only the object change i.e it will track the object reference only of elements to the object and will not track the object elements.
//by using $watch
// $scope.$watch("obj", function(newvalue,oldvalue){
//     if(newvalue != oldvalue){
//         $scope.obj.c = $scope.obj.a +$scope.obj.b
//     }
// },true);



//by using $watchgroup
//when  $watchgroup is used there is a watcher created for every element added to the group array
// so here 2 watchers created for the array
$scope.$watchGroup(['obj.a','obj.b'], function(newvalue,oldvalue){
    if(newvalue != oldvalue){
        $scope.obj.c = $scope.obj.a +$scope.obj.b;
        // console.log($scope);
    }
});
//to see digest cycle
$scope.$watch(function(){
    console.log('digest cycle fired');
});

}

})();

//NOTE:- $scope.$watch('value to watch', function(nevalue, old value){ here this finction is called watch listener to the value i.e whenever the change is happened to the value this function will call})