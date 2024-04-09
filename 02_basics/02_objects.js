// singleton - from constructor
//Object.create // create object from consturctor 

//literals - 

//object creation
//const jsUser = {}

const mySym = Symbol("key1")
const JsUser = {
   name : "khim",
   [mySym]: "myKey1",
   age : 27,
   isLoggedIn : false,
   lastLogInDay: ["Mon", "tues"]
}

console.log(JsUser.name); //value access using dot operator
console.log(JsUser["name"]); //best practise to access values

console.log(typeof JsUser.name);
console.log(JsUser[mySym]); //to get access of symbol value



JsUser.name = "shrestha"
//Object.freeze(JsUser); //dont change anything


JsUser.greeting = function(){
    console.log("hello js user");
}


JsUser.greetingTwo = function(){
    console.log(`hello js user, ${JsUser.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //hello js user

console.log(JsUser.greeting()); //hello js user

console.log(JsUser.greetingTwo()); //