// coercion cases
let num = -0;
console.log(`hey this is ${num}`) // "hey this is 0"

let numStudent = 16;
console.log(`there are ${[numStudent].join("")} student`)
console.log(String(-16)) //-16

function addNum(num){
    return +num+1; //30
    return num-1  //28
    return num+1 //291
}
console.log(addNum("29"))

let a = 23;
let b = new Number(a);
console.log(typeof a); //number
console.log(typeof b); //object

console.log(a);
console.log(b);
console.log(Boolean(new Boolean())) //true
console.log(new Boolean("meekail")) //  Boolean {true}