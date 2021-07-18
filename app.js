(function(){

   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.provider("shoppinglistService", shoppinglistServiceProvider);
    
MyFirstController.$inject = ['$scope','$filter','$timeout','shoppinglistService'];
    function MyFirstController($scope,$filter, $timeout,shoppinglistService){
        var ctrl1 = this;
        ctrl1.itemname = "";
        ctrl1.itemquantity = "";
        ctrl1.additem = function(){
            try {
                if (ctrl1.itemname === "" &&
                ctrl1.itemquantity === "") {
                    alert("please add item name and quantity")
                } else {
                    shoppinglistService.additem(ctrl1.itemname,ctrl1.itemquantity);
                    ctrl1.itemname = "";
                    ctrl1.itemquantity = "";
                }

                
            } catch (error) {
                ctrl1.errormessage= error.message;
            }

            
        }
        ctrl1.items = shoppinglistService.getitem();

        ctrl1.removeitem = function(indexofitem){
            shoppinglistService.removeitem(indexofitem);
            ctrl1.itemname = "";
            ctrl1.itemquantity = "";
        }
       
        
    
        }



//declaration of service which will include in the factory functin
//custom service function with function constructor
function shoppinglistService(maxitem) {
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
function shoppinglistServiceProvider(){
var provider = this;
provider.defaults = {
    maxitem: 10
}
provider.$get = function(){
    
var shoppinglist = new shoppinglistService(provider.defaults.maxitem);
return shoppinglist;
}
}
    
})();

//note : this is not for singleton application but we can use it as singletons
