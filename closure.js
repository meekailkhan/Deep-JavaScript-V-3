// closure 

let name = "meekail";

var myName = function(){
    console.log(name);
};

myName()

name = "mujaahid";

myName()

var school = {
    teacher: "meekail",
    ask(question){
        console.log(this.teacher,question)
    },
};

school.ask("what is your hobbie"); // meekail what is your hobbie
    