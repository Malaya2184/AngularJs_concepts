(function(){
    'use strict';
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController);
MyFirstController.$inject = ['$scope','$filter','$timeout'];

function MyFirstController($scope,$filter, $timeout){


}

})();

//NOTE:- $scope.$watch('value to watch', function(nevalue, old value){ here this finction is called watch listener to the value i.e whenever the change is happened to the value this function will call})