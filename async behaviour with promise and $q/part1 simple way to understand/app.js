(function(){

   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.service("shoppinglistService",shoppinglistService)
.service("shoppingfilterservice",shoppingfilterservice);
    
MyFirstController.$inject = ['$scope','$filter','$timeout','shoppinglistService'];
    function MyFirstController($scope,$filter, $timeout,shoppinglistService){
        var ctrl1 = this;
        ctrl1.itemname = "";
        ctrl1.itemquantity = "";
        ctrl1.items= shoppinglistService.getitem();
        ctrl1.additem = function(){
            shoppinglistService.additem(ctrl1.itemname, ctrl1.itemquantity);
        }
        ctrl1.removeitem = function(index){
            shoppinglistService.removeitem(index);
        }


        
    
        }



//declaration of service which will include in the factory functin
//custom service function with function constructor
//=======================================================
//sync type
//Simpler way to under stand the syntax part1
shoppinglistService.$inject =['$q','shoppingfilterservice']
function shoppinglistService($q,shoppingfilterservice) {
    //function constructor
    var service = this;
    var items = [];
    service.additem = function(itemname, itemquantity){
        {
        var promise = shoppingfilterservice.checkname(itemname);
        promise.then(function(result){
            var item = {
                itemname: itemname,
                itemquantity: itemquantity
            };
            items.push(item);
        },function(error){
            alert("Not allowed to add cookies")
        });
        
    }
    };
    service.getitem = function(){
        
        return items;
    };
    service.removeitem = function(index){
        items.splice(index, 1);
    }
    
}
//=======================================================
//sync type
//Simpler way to under stand the syntax part1
shoppingfilterservice.$inject = ['$q','$timeout']
function shoppingfilterservice($q,$timeout)
{
 var service = this;
 service.checkname = function(name){
     var deffered = $q.defer();
     var result = {
         message:""
     }
        if(name.toLowerCase().indexOf('cookie') === -1){
            deffered.resolve(result);
        }
        else{
            deffered.reject(result);
        }
        return deffered.promise;
    


 }
    
}

    
})();

//note : this is not for singleton application but we can use it as singletons
