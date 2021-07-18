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
        ctrl1.itemname = "";
        ctrl1.itemquantity = "";
    }
    ctrl1.items = shopinglist.getitem();

    ctrl1.removeitem = function(indexofitem){
        shopinglist.removeitem(indexofitem);
    }
    

    }
    MySecondController.$inject = ['$scope','$filter','$timeout','shopinglistfactory'];
    function MySecondController($scope,$filter, $timeout,shopinglistfactory){
        var ctrl2 = this;
        var shopinglist = shopinglistfactory(5);
        ctrl2.itemname = "";
        ctrl2.itemquantity = "";
        ctrl2.additem = function(){
            try{
                shopinglist.additem(ctrl2.itemname, ctrl2.itemquantity);
                ctrl2.itemname = "";
                ctrl2.itemquantity = "";
            }
            catch(error){
                ctrl2.itemname = "";
                ctrl2.itemquantity = "";
                ctrl2.errormessage = error.message;
            }
            
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
    service.additem = function(itemname, itemquantity){
        if((maxitem == undefined) || (maxitem != undefined) && (items.length < maxitem)){
        var item = {
            itemname: itemname,
            itemquantity: itemquantity
        };
        items.push(item);
    }
    else{
        throw new Error("Max item ("+maxitem+") Reached");
    }
    };
    service.getitem = function(){
        
        return items;
    };
    service.removeitem = function(index){
        items.splice(index, 1);
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
