(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.filter('custom',customFilterFactorty);
MyFirstController.$inject = ['$scope','$filter', '$injector','customFilter'];

function MyFirstController($scope,$filter,$injector,customFilter){
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
//  }

//using customFilter
$scope.sayFilteredMessage = function (name) {
    var msg = "hello loves likes likes likes ";
    
    return (customFilter(msg+name));
 }
}
//custom filter with no arguments * always define it outside the controller scope
function customFilterFactorty() {
    return function (input){
        input = input || "";
        //this syntax is to replace the 1st likes in to loves
        // input = input.replace('likes', 'loves');

        //but this syntax replaces all likes to loves
        input = input.replace(/likes/g, 'loves');
        return input;
    }
}


})();