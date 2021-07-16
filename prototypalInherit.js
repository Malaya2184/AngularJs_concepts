// proto typal inheritance
var parent = {
    value : "parent value",
    obj: {
        objValue : "parentObjValue"
    },
    walk: function () {
        return console.log("walking");
    }
};
//add 1
var child = Object.create(parent);
//this will change only to the value property of child [called masking not changing]
child.value = "child value";
// but in this case as obj value is a property of obj i.e an object so it will change the value of both child as well as parents
child.obj.objValue = "childobjvalue";

//common
console.log("child - child.value: ", child.value);
console.log("child - child.obj.objvalue: ", child.obj.objValue);
console.log("------------------------------------------------");
console.log("parent - parent.value: ", parent.value);
console.log("parent - parent.obj.objvalue: ", parent.obj.objValue);
console.log('------------------------------------------------');
console.log("parent", parent);
console.log("child", child);

//this will return true
console.log('child.obj === parent.obj ?', child.obj === parent.obj);

//grand child here the proto typr is child which is the proto type of parent
var grandchild = Object.create(child);
console.log("grand child :", grandchild);
console.log("grandchild.walk()", grandchild.walk());