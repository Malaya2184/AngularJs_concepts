(function(){
    // 'use strict';
   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.controller("MySecondController",MySecondController)
.service("shopinglistservice", shopinglistservice);
//here 1st is the name of the service and second is the function responsible for the custom service . name will pass to the cntroller
    
MyFirstController.$inject = ['$scope','$filter','$timeout',"shopinglistservice"];
function MyFirstController($scope,$filter, $timeout,shopinglistservice){
    var ctrl1 = this;
    ctrl1.itemname = "";
    ctrl1.itemquantity = "";
    ctrl1.additem = function(){
        shopinglistservice.additem(ctrl1.itemname,ctrl1.itemquantity);
        ctrl1.itemname = "";
        ctrl1.itemquantity = "";
    };

    }

MySecondController.$inject = ['$scope','$filter','$timeout',"shopinglistservice"];
function MySecondController($scope,$filter, $timeout,shopinglistservice){
    var ctrl2= this;
    ctrl2.items = shopinglistservice.getitem();
    ctrl2.removeitem = function(itemindex){
        shopinglistservice.removeitem(itemindex);
    }
        
    
        }

//custom service function with function constructor
function shopinglistservice() {
    //function constructor
    var service = this;
    var items = [];
    service.additem = function(itemname, itemquantity){
        var item = {
            itemname: itemname,
            itemquantity: itemquantity
        };
        items.push(item);
    };
    service.getitem = function(){
        
        return items;
    }
    service.removeitem = function(itemindex){
        items.splice(itemindex,1);
    }
}
})();

