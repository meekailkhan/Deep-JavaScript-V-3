// abstract opretion in javascript
 

let num = 1234;

let str = String(num) //"1234"


// toString

console.log(String(undefined)) // "undifined"
console.log(String(null)) // "null"
console.log(String(true)) // "true"
console.log(String(false)) // "false"
console.log(String(3.1463)) // "3.1463"
console.log(String(0)) // "0"
console.log(String(-0)) // "0"
console.log(String([])) // ""
console.log(String([1,2,3])) // "1,2,3"
console.log(String([undefined,null])) // ","
console.log(String([[],[],[]],[])) // ,,
console.log(String([,,,,])) // ",,,"


// toNumber
console.log(Number("")) // 0
console.log(Number("0")) // 0
console.log(Number("-0")) // -0
console.log(Number("  009  ")) // 9
console.log(Number("3.1459")) // 3.1459
console.log(Number("0.")) // 0
console.log(Number(".0")) // 0
console.log(Number(".")) // NaN
console.log(Number("0xaf")) // 175  
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

console.log(undefined === undefined) //true
console.log(NaN===NaN)
let a = Number(undefined)
let b = Number(undefined)
console.log(a===b)//false
console.log(a==b) //false
console.log(Object.is(a,b)) //true

// ToBoolean 
console.log("there is Boolean")
console.log(Boolean("")) //false
console.log(Boolean(-0)) // false
console.log(Boolean(0))  //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(null)) //false
console.log(Boolean(false)) //false

console.log(Boolean("meekail")) // true
console.log(Boolean(23)) // true
console.log(Boolean({name:"meekail"})) // true
console.log(Boolean([1,2,3,4])) //true
console.log(Boolean(true)) // true
console.log(Boolean(function Fn(){})) // true


