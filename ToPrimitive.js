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


