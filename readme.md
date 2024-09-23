# Deep JavaScript

## Prefix Postfix Increament
>in this case we can increament or dcreament in the value of any variable without chacking his data type for this case we use opretor ++ and -- postfix and prefix are diffrence diffrence concept in JavaScript
> ++5 this is a prefix consept 
> 5++ this is a postfix consept
if we can do something these type code => "5" + 1 then javascript does concat 5 and 1 and result show "51"
>that,s only reason we used postfix and prefix increament

```js

var x = 5;
console.warn(x++); // 5 this is a postfix increament
console.warn(x); //6

var a = "5";
console.warn(a=a+1);
console.warn(a);//51 
console.warn(++a); //52


// x++ mean
var y = "6";

function plusplusFn(num){
    num = Number(num);
    num = num + 1
    return num
}
console.warn(plusplusFn(y)) // 7
console.warn(plusplusFn(true));//1+1=2
```

# Abstract Opretion
>In JavaScript three abstract operation
>ToString
>ToNumber
>ToBoolean

## ToString
```js
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
```

## ToNumber
```js
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
```

## ToBoolean

### Falsy Value
```js
console.log("there is Boolean")
console.log(Boolean("")) //false
console.log(Boolean(-0)) // false
console.log(Boolean(0))  //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(null)) //false
console.log(Boolean(false)) //false
```
### Truthy Value
```js
console.log(Boolean("meekail")) // true
console.log(Boolean(23)) // true
console.log(Boolean({name:"meekail"})) // true
console.log(Boolean([1,2,3,4])) //true
console.log(Boolean(true)) // true
console.log(Boolean(function Fn(){})) // true
```

# Cheak Equality
> In javaScript we can cheak equality of any value and data type 
> If we want cheak only value is equal or not equal so we can use double equals == operator this is cheak loose equality 
>If we want strictly cheak it,s mean value and data type both are cheaking in this case in this case we use triple equal === opretor

```js
var name = "meekail";
var lastName = `${name}`

var age = 18;
var nextDayAge = age+0;

console.log(name == lastName); // true
console.log(name === lastName); // true

console.log(age==nextDayAge); // true
console.log(age===nextDayAge); // true

let obj1 = {
    name:"meekail",
}
let obj2 = {
    name:"meekail"
}
console.log(obj1==obj2); // true
console.log*(obj1===obj2); // false
```
# IIFE Pettern
>Imigiatly Invoke Function Expression
```js
( function fn2(name){
    console.log(`this is IIFE function and hello ${name}`)
})("meekail");
```
>In this case we are imigiatly call function after create the function
>This function is not function expression just beacuse in this statement function is not first word 

# Const
>Const variable is variable who not reassigne and redeclair but we can changes in there old value
```js
var a = "meekail";
a = "mujaahid" // mujaahid 

const b = "meekail";
// b = "mujaahid"; // Typerror

const arr = ["meekail","arbaaz"];
arr[1] = "mujaahid"; // meekail,mujaahid
console.log(arr)

```

# Coercion Exercise

>Create two funtion 
### 1.isValidName
>If datatype of name is equal to string
>If length of name without whitespace greaterthen or equal to 3
>Return true;
>Otherthen return false;

### 2.hoursAttended
>Two perameter in this function 1.attende 2.length
>If both of attended and length datatype is string if attended and length without whitout whitespace is equal to empty string 
>Then conver attended and lenght into number
>If attended and length greaterthen and equal to 0
>If attended and length is Intiger 
>If attended lessthen or equal to length
>Return true;
>Otherthen return false;

# Coercion Exercise solution

### 1.isValidName
```js
function isValidName(name){
    if(
        typeof name == "string" &&
        name.trim().length >= 3
    ){
        return true;
    }
    return false;
}

```
### 2.hoursAttend
```js
function hoursAttended(attend,Length){
    if(
        typeof attend == "string"&&
        attend.trim() != "" 
    ){
        attend = Number(attend)
    }
    if(
        typeof Length == "string"&&
        Length.trim() != "" 
    ){
        Length = Number(Length)
    }
    if(
        typeof attend == "number"&&
        typeof Length == "number"&&
        attend >= 0 &&
        Length >= 0 &&
        Number.isInteger(attend)&&
        Number.isInteger(Length)&&
        attend<=Length
    ){
        return true
    }
    return false;
}
```

---
## Imlicit Coercion
>Implicit coercion are some time better and some time harmful 

>Implicit coercion are show extra detail to the reader who usefull at some time and useless at some time

#### usefull
>when the reader only focus on importants

#### dangerou
>when the reader or coder can,t say any about of code and it result

#### Better
>when the reader or coder know all about code and it result 

# cheacking internali
>at the comperison with double equla it is allow coercion internali and convert both of value with same datatype but tripel equla operator is not allow coercion and if datatype not equla of both value,s return false

## Abstract opretion and coercion 
>In JavaScript type conversion we called corecion corecion means convert data type of any value into another data type for this proccess in JavaScript some abstract opration who work with specification 

* **toPrimitive** => the work of abstract opration to change data type of non-primitive data type into primitive data type
    * none primitive value like Object Arrays and Funtion etc.

```js
// toPrimitive

let obj = {
    valueOf(){
        return 42;
    },
    toString(){
        return "this is string text"
    }
}

console.log(obj + 1); // 43
console.log(String(obj)) // this is string text

```

In JavaScript we have 2 toPrimitive function
1.__valueOf()__
2.__toString()__

> when we try to do somethig with object if it,s numeric opretion like calculation and mathametics so javascript autometically run **valueOf()** function if its failde to convert its datatype into number its try with **toString()** function if both are failde to convert data type its throw error 
