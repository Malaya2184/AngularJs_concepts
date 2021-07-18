(function(){

   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.provider("shoppinglistService", shoppinglistServiceProvider)
//.config always loads first before any controller and provider or services
.config(Config);
//here both injector and service are the name of the provider + Provider (note : it is not the provider function)
Config.$inject= ["shoppinglistServiceProvider"];
function Config(shoppinglistServiceProvider){
    //over ridding takes place here
    shoppinglistServiceProvider.defaults.maxitem = 5;
}
    
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

//defn of provider function
function shoppinglistServiceProvider(){
var provider = this;
//here we assign an variable/object i.e defaults to the provider object
provider.defaults = {
    maxitem: 10
}
//here the $get method makes this provider obj to a Provider
//generally it is crating a factory which will produce a service as per our requirements
provider.$get = function(){
    
var shoppinglist = new shoppinglistService(provider.defaults.maxitem);
return shoppinglist;
}
}
    
})();

