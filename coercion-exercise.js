// coercion exercise

function isValidName(name){
    if(
        typeof name == "string" &&
        name.trim().length >= 3
    ){
        return true;
    }
    return false;
}


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



console.log(isValidName("Frank")===true);
console.log(hoursAttended(6,10)===true);
console.log(hoursAttended(6,"10")===true);
console.log(hoursAttended("6",10)===true);
console.log(hoursAttended("6","10")===true);

console.log(isValidName(false)===false);
console.log(isValidName(null)===false);
console.log(isValidName(undefined)===false);
console.log(isValidName("")===false);
console.log(isValidName(" \t\n")===false);
console.log(isValidName("X")===false);
console.log(hoursAttended("",6)===false);
console.log(hoursAttended(6,"")===false);
console.log(hoursAttended("","")===false);
console.log(hoursAttended("foo",6)===false);
console.log(hoursAttended(6,"foo")===false);
console.log(hoursAttended("foo","bar")===false);
console.log(hoursAttended(null,null)===false);
console.log(hoursAttended(null,undefined)===false);
console.log(hoursAttended(undefined,null)===false);
console.log(hoursAttended(undefined,undefined)===false);
console.log(hoursAttended(false,false)===false);
console.log(hoursAttended(false,true)===false);
console.log(hoursAttended(true,false)===false);
console.log(hoursAttended(true,true)===false);
console.log(hoursAttended(10,6)===false);
console.log(hoursAttended(10,"6")===false);
console.log(hoursAttended("10",6)===false);
console.log(hoursAttended("10","6")===false);
console.log(hoursAttended(6,10.1)===false);
console.log(hoursAttended(6.1,10)===false);
console.log(hoursAttended(6,"10.1")===false);
console.log(hoursAttended("6.1",10)===false);
console.log(hoursAttended("6.1","10.1")===false);


