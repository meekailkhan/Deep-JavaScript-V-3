// type cheack exercise
if(!Object.is){
    Object.is = function ObjectIs(x,y){
        var xNegetivezero = isItNegZero(x);
        var yNegetiveZero = isItNegZero(y);

        if(xNegetivezero || yNegetiveZero){
            return xNegetivezero && yNegetiveZero;
        }
        else if (isItNaN(x) && isItNaN(y)){
            return true;
        }
        else {
            return x === y;
        } 
  

        // **********************************
        function isItNegZero(v) {
            return v === 0 && (1/v === -Infinity);
        };
        function isItNaN(v){
            return v!==v;
        };
    };
};









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

