// typeof opretor in JavaScript

var x 
console.warn(typeof x); // undefined
x = "1";
console.warn(typeof x) //string
x = 1;
console.warn(typeof x) //number
x = true;
console.warn(typeof x) //boolean
x = Symbol();
console.warn(typeof x) //symbol
x = function fn(){};
console.warn(typeof x) //function
x = {};
console.warn(typeof x) //object
x = [];
console.warn(typeof x) //object
console.warn(typeof f) // undefined but it,s acctually undecleared  

function myFn(){
    return "this is function"
}

console.log(typeof myFn()) //string
console.log(typeof myFn)