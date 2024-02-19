// prototype inheritance 

function Workshop(teacher){
    this.teacher = teacher
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher,question)
}

// let obj = new Workshop("meekail");
// console.log(obj);
// obj.ask("is this prototype");

function AnotherWorkshop(teacher){
    Workshop.call(this,teacher);
};

AnotherWorkshop.prototype = Object.create(Workshop.prototype);
// let obj = new AnotherWorkshop('meekail')
// obj.ask("is this prototype")
AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
}

let obj = new AnotherWorkshop("meekail")
console.log(obj)
obj.speakUp("is this prototype"); // meekail IS THIS PROTOTYPE
