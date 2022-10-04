(function () {
    angular.module('myModule',[])
    .controller('myController',myController)
    .component('myComponent', {
        templateUrl: './template.html',
        controller: myComponent,
        // controllerAs:'ctrl',
        bindings:{
            myName: '<fromMain',
            onClick: '&'

        }
    })


    myController.inject = []
    function myController() {
        const myctrl = this
        myctrl.myName = 'spider`'

        myctrl.logit=function(arg){
            console.log(arg);
        }

    }

    myComponent.inject=[]
    function myComponent(){
        var $ctrl = this
        $ctrl.name = 'malaya'
        console.log($ctrl);
    }

})();