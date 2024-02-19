// normal function

function fn(){
    console.log("this is expression function");
};

fn();

// IIFE imigiatly invoke function expression

( function fn2(name){
    console.log(`this is IIFE function and hello ${name}`)
})("meekail");