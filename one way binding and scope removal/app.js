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

//note : must know how the watcher get removed after the calling of set full name
// ans - because hele the full name is first instanciated inside the setname so after the function call watcher removed from it due to the one way binsing. if you instanciated the ful name before the function call the the full name will be the initial value and from starting the number of watchers will be one because it will not watch after the application start

