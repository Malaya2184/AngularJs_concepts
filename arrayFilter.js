const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const containLi = function(value){
  return value.indexOf("li") != -1
}
const result = words.filter(containLi);

console.log(result);

//----------------syntax------------------------//
// // Arrow function
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// // Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function callbackFn(element) { ... })
// filter(function callbackFn(element, index) { ... })
// filter(function callbackFn(element, index, array){ ... })
// filter(function callbackFn(element, index, array) { ... }, thisArg)
