// special value negetive zero
var trendRate = -0;
console.log(trendRate === -0)//true

console.log(trendRate.toString())//"0"
console.log(trendRate === 0)//true
console.log(trendRate>0)//false
console.log(trendRate<0)//false

// cheacking with object.is
console.log(Object.is(trendRate,-0))//true
console.log(Object.is(trendRate,0)) //false
console.log(Object.is(trendRate,-false))//true
console.log(Object.is(trendRate,(true-1)))//false
console.log(Object.is(trendRate,-(true-1)))//true
console.log(Object.is(trendRate,-null))//true
console.log(Object.is(trendRate,-NaN))//false
console.log(Object.is(trendRate,-undefined))//false
console.log(Number(undefined))//NaN

// console.log(Object.is(Number(undefined),Number(undefined)))
let a = Number(undefined);
let b = Number(undefined);
console.log(a,b)
console.log(a===b)//true
console.log(Object.is(a,b))//true
console.log(Object.is(NaN,NaN))//true

console.log(Math.sign(-3)) //-1
console.log(Math.sign(3)) //1
console.log(Math.sign(-0)) //-0
console.log(Math.sign(0)) //0

function sign(n){
    return n !== 0 ? Math.sign(n) : Object.is(n,-0)? -1:1
}

console.log(sign(-3))//-1
console.log(sign(3))//1
console.log(sign(0))//1
console.log(sign(-0))//-1

function formatTrend(rateOfTrande){
    var analys = 
    (rateOfTrande < 0 || Object.is(rateOfTrande,-0))? "Down":"Up";
    return `${analys} ${Math.abs(rateOfTrande)}`
}

console.log(formatTrend(-3)) //Down 3
console.log(formatTrend(3))  //Up 3
console.log(formatTrend(-0)) //Down 0
console.log(formatTrend(0))  //Up 0


