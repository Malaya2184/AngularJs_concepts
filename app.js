(function(){

   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.controller("MySecondController",MySecondController)
.factory("shopinglistfactory",shopinglistfactory);
    
MyFirstController.$inject = ['$scope','$filter','$timeout','shopinglistfactory'];
function MyFirstController($scope,$filter, $timeout,shopinglistfactory){
    var ctrl1 = this;
    var shopinglist = shopinglistfactory();
    ctrl1.itemname = "";
    ctrl1.itemquantity = "";
    ctrl1.additem = function(){
        shopinglist.additem(ctrl1.itemname, ctrl1.itemquantity);
    }
    ctrl1.items = shopinglist.getitem();

    ctrl1.removeitem = function(indexofitem){
        shopinglist.removeitem(indexofitem);
    }
    

    }
    MySecondController.$inject = ['$scope','$filter','$timeout','shopinglistfactory'];
    function MySecondController($scope,$filter, $timeout,shopinglistfactory){
        var ctrl2 = this;
        var shopinglist = shopinglistfactory();
        ctrl2.itemname = "";
        ctrl2.itemquantity = "";
        ctrl2.additem = function(){
            shopinglist.additem(ctrl2.itemname, ctrl2.itemquantity);
        }
        ctrl2.items = shopinglist.getitem();
    
        ctrl2.removeitem = function(indexofitem){
            shopinglist.removeitem(indexofitem);
        }
        
    
        }



//declaration of service which will include in the factory functin
//custom service function with function constructor
function shopinglistservice(maxitem) {
    //function constructor
    var service = this;
    var items = [];

    if(((maxitem == undefined)) || ((maxitem != undefined) && (items.length < maxitem))){


    service.additem = function(itemname, itemquantity){
        var item = {
            itemname: itemname,
            itemquantity: itemquantity
        };
        items.push(item);
    };
    service.getitem = function(){
        
        return items;
    };
    service.removeitem = function(itemindex){
        items.splice(itemindex,1);
    };
    }
    else {
        throw new Error("Max item ("+maxitem+") Reached");
    }

}

//note : you can't declarw these functions like var functionname = function()
function shopinglistfactory(){
    var factory = function(maxitem){
        return new shopinglistservice(maxitem);
    };
    return factory;
};
    
})();

//note : this is not for singleton application but we can use it as singletons
