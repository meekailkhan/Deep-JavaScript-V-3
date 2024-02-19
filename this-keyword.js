// this keyword

let user = {
    username:"meekail",
    age:18,
    userinfo:function(){
        console.log(`username is ${this.username} and user age is ${this.age}`)
    }
}

user.userinfo()

function ask(question) {
    console.log(this.teacher,question)
};

function otherClass(){
    var myContext = {
        teacher:"meekail"
    };
    myContext.teacher = "mujaahid"
    ask(myContext,"meekail")
}


otherClass()

// implicit Binding

var obj = {
    name:"meekail",
    ask(question){
        console.log(this.name,question)
    }
}

obj.ask("what is your father name ?")

// Dynamic Binding

function fn(question){
    console.log(this.name,question)
};

var obj1 = {
    name:"meekail",
    ask:fn,
}

var obj2 = {
    name:"mujaahid",
    ask:fn,
}

obj1.ask("what is your mother name ?");
obj2.ask("what is brother name ?");

// explicitly Binding

function fn2(question){
    console.log(this.user,question);
}

var userObj1 = {
    user:"meekail"
}

var userObj2 = {
    user:"mujaahid"
}

fn2.call(userObj1,"what are you doing");
fn2.call(userObj2,"what are you doing");

//  hard Binding
var hardObj = {
    teacher:"mujaahid",
    ask(question){
        console.log(this.teacher,question)
    },
};

setTimeout(hardObj.ask,10,"is my brother")

setTimeout(hardObj.ask.bind(hardObj),1000,"is my brother")