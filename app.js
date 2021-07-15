(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

function MyFirstController($scope,$filter, $timeout){
$scope.firstname = "malaya";

$scope.logfirstname= function () {
    console.log($scope.firstname);
}
//when setfull name is calleed the watcher attached to full name unattached after the digestation cycle because of one way binding
$scope.setfullname = function () {
    
    $scope.fullname = $scope.firstname + " kumar swain";
}
$scope.logfullname = function () {
    console.log($scope.fullname);
}
}

})();

