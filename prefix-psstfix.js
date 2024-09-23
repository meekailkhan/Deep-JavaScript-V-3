// prefix and postfix increament and decreament 

var x = 5;
console.warn(x++); // 5 this is a postfix increament
console.warn(x); //6

var z = "5";
console.warn(z=z+1);
console.warn(z);//51 
console.warn(++a); //52


// x++ mean
var y = "6";

function plusplusFn(num){
    num = Number(num);
    num = num + 1;
    return num;
};
console.warn(plusplusFn(y));//"6" +1 = 7
console.warn(plusplusFn(true));//1+1=2
console.warn(plusplusFn(false));//0+1=1
console.warn(plusplusFn(undefined)); //NaN + 1 = NaN
console.warn(plusplusFn(null));// 0+1=1

// example:
var a = 10;
var b = 5;

console.warn(b++ + --a + a++ - --b - a-- + ++a - --b + ++b)


let strNum = "8"
function increament(x,y){
    x = Number(x);
    x = x+1;
    // y = x;
    
    return y
}
console.log(9)
console.log(increament(strNum,strNum))

let t = true;
let f = false;
let n = null;
console.log(++t)//2
console.log(++f)//1
console.log(true == f)//true
console.log(--t ,--t)
console.log(t == false) // true
console.log(++n,true===n)//1 false