// Double Equal Algorithm

console.log(12==12) // true
console.log(null==undefined) //true
console.log(undefined==null) //true
console.log(12==!Number("12")) //false
console.log(!Number("12")==12) //false
console.log(!Number(false)==0) //false
console.log(12==!Number(true)) //false
console.log("41313"==String(41313)) // true

console.log([]==![]) //true
let arr1 = [];
let arr2 = [];

console.log(arr1 != arr2) //true
console.log(arr1 ==! arr2) //true