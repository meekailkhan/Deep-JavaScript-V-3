// // Object oriented in javascript
// // this keyword
// var person = "meekail";
// var age = 18


// function info(){
//     console.log(`person name is ${this.person} and person age is ${this.age}`)
// }

// let obj1 = {
//     person:"meekail",
//     age:18,
//     about:info,
// }

// let obj2 = {
//     person:"mujaahid",
//     age:26,
//     about:info,
// }

// let obj3 = {
//     person:"arbaaz",
//     age:17,
//     about:info,
// }

// obj1.about();
// obj2.about();
// obj3.about();

// info()

// console.log(this);
// console.log(this.person)

// // call method

// function fn(standard,fild){
//     console.log(`user name is ${this.username} and user id is ${this.id}`,standard,fild)
// }

// let user1 = {
//     username:"meekail",
//     id:1234
// }

// let user2 = {
//     username:"mujaahid",
//     id:5678
// }

// fn.call(user1,"12th","commerce") // user name is meekail and user id is 1234 12th commerce
// fn.apply(user2,["12th","since"]) // user name is mujaahid and user id is 5678 12th since


// let newObj = {
//     name:"meekail",
//     id:1234,
//     info(){
//         console.log(this.name,this.id)
//     }
// }

// let myFn = newObj.info.bind(newObj)

// myFn()

// function createUser(name,finalName,emailAdd,userAge,address) {
//     let user = {};
//     user.firstName = name;
//     user.lastName = finalName;
//     user.email = emailAdd;
//     user.age = userAge;
//     user.address = address;
//     user.about = function(){
//         return this.firstName, this.age
//     };
//     user.is18 = function() {
//         return this.age>=18
//     };
//     return user
// }

// let userMethods = {
//     about : function(){
//         return this.firstName, this.age
//     },
//     is18 : function() {
//         return this.age>=18
//     },
//     info : function(){
//         return `${this.firstName} email is ${this.email}`
//     }
// }

// function createUser(name,finalName,emailAdd,userAge,address) {
//     let user = Object.create(createUser.prototype);
//     user.firstName = name;
//     user.lastName = finalName;
//     user.email = emailAdd;
//     user.age = userAge;
//     user.address = address;

//     return user
// }

// createUser.prototype.about = function(){
//         return this.firstName, this.age
// };

// createUser.prototype.is18 = function() {
//         return this.age>=18
// };

// createUser.prototype.info = function(){
//         return `${this.firstName} email is ${this.email}`
// }



// let userobj1 = createUser("meekail","aslam","meekailkhan123aar@gmail.com",18,"my address");
// let userobj2 = createUser("mujaahid","aslam","mujaahid@gmail.com",25,"my address2")


// function CreateUser(name,finalName,emailAdd,userAge,address) {
//     // let user = Object.create(CreateUser.prototype);
//     this.firstName = name;
//     this.lastName = finalName;
//     this.email = emailAdd;
//     this.age = userAge;
//     this.address = address;

// }

// CreateUser.prototype.about = function(){
//         return this.firstName, this.age
// };

// CreateUser.prototype.is18 = function() {
//         return this.age>=18
// };

// CreateUser.prototype.info = function(){
//         return `${this.firstName} email is ${this.email}`
// }

class CreateUser{
        constructor(name,finalName,emailAdd,userAge,address){
                this.firstName = name;
                this.lastName = finalName;
                this.email = emailAdd;
                this.age = userAge;
                this.address = address;
        }
        about() {
                return this.firstName, this.age
        };
        is18() {
                return this.age>=18
        };
        info() {
                return `${this.firstName} email is ${this.email}`
        }


}



let userobj1 = new CreateUser("meekail","aslam","meekailkhan123aar@gmail.com",18,"my address");
let userobj2 = new CreateUser("mujaahid","aslam","mujaahid@gmail.com",25,"my address2")



console.log(userobj1);
console.log(userobj2);

// console.log(userobj.firstName);
// console.log(userobj.lastName);
// console.log(userobj.email);
// console.log(userobj.age);
// console.log(userobj.address);
// console.log(userobj.about())
// console.log(userobj.is18())


// let obj1 = {
//     key1:"value1",
//     key2:"value2",
// }

// // obj2 ke proto me obj1 ko set karna hai
// let obj2 = Object.create(obj1)
// obj2.key3 = "value3";

// let obj3 = Object.create(obj2);
// obj3.key4 = "value4"


// console.log(obj1);
// console.log(obj2.key1)
// console.log(obj3.key1)
// console.log(obj3.key3)

