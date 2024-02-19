


console.log(Object.is(42,42)=== true)//true
console.log(Object.is("foo","foo")===true) //true
console.log(Object.is(false,false)===true) //true
console.log(Object.is(null,null)===true)//true
console.log(Object.is(undefined,undefined)===true)//true
console.log(Object.is(-0,-0)===true) //true
console.log(Object.is(0,0)===true)//true
console.log(Object.is(NaN,NaN)===true)//true

console.log(Object.is(0,-0)===false) //true
console.log(Object.is(NaN,0)===false) //true
console.log(Object.is(NaN,-0)===false)//true
console.log(Object.is(42,"42")===false)//true
console.log(Object.is(false,true)===false)//true
console.log(Object.is(null,undefined)===false)//true

