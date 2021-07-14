(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter', '$injector'];

function MyFirstController($scope,$filter,$injector){
$scope.name = "Malaya";
$scope.upercase ="";

// $scope.upper = function(){
//     var Upcase = $filter('uppercase');
//     $scope.upercase = Upcase($scope.name);
// }
// console.log($injector.annotate(MyFirstController));

// $scope.sayMessage = function (name) {
//     var msg = "hello whatsapp ";
    
//     return ($filter('uppercase')(msg + name));
// }
}



})();