(function(){

   
angular.module("MyFirstApp", [])


.controller("MyFirstController",MyFirstController)
.service("menucategoryservie",menucategoryservie)
.constant("ApiBasePath","http://davids-restaurant.herokuapp.com");
    
MyFirstController.$inject = ["menucategoryservie"];
    function MyFirstController(menucategoryservie){
        var ctrl1 = this;
        var promise = menucategoryservie.getmenucategories();
        promise.then(
            function(response){
                ctrl1.categories= response.data;
            })
            .catch(function(error){
                console.log('something went wrong');
            });
        ctrl1.logmenuitems = function (shortname) {
            var promise = menucategoryservie.getmenuforcategory(shortname);
            promise.then(function(response){
                console.log(response.data);
            })
            .catch(function(error){
                console.log("error");
            });
        }


        
    
        }
menucategoryservie.$inject = ["$http","ApiBasePath"];
function menucategoryservie($http,ApiBasePath){

    var service = this;
    service.getmenucategories = 
    function()
    {
        var response = $http({
            method : "GET",
            url : (ApiBasePath + "/categories.json")
        });
        return response;
    }
    service.getmenuforcategory = 
    function(shortname){
        var response = $http({
            method : "GET",
            url : (ApiBasePath + "/menu_items.json"),
            params : {
                category : shortname
            }
        })
        return response;
    }
}
  
})();

//note : this part is lil tricky and didfficult to under stand . so there is an alternative way to achieve this in part 3