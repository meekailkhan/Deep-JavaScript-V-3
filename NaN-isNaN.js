// NaN is special value in javascript

let myAge = Number("0o46"); //38
let nextAge = Number("39"); // 39 
let newAge = Number("f/d");
console.log(newAge)
console.log(myAge-newAge) // NaN
console.log(myAge) // 38 this is octal number
let name = Number("my name is meekail");
console.log(name) // NaN
console.log(name === name) //false : in the javascript NaN is the only value who not equal to it self
console.log(isNaN("meekail"))//true
console.log(isNaN(myAge)) //false
console.log(Number.isNaN(newAge)) //true
console.log(Number.isNaN("hi there is me"))         
console.log(Number.isNaN(newAge)) //true
console.log(Number.isNaN("f/d")) // false