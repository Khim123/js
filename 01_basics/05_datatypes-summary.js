// based on data storage 

// primitive  (pass by value)= String, Number , Boolean, null, undefined, symbol, BigInt
const outsideTemp = null


const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId); //false

const bigNumber = 3452434444344424543252435n

// reference = non primitive = Arrays, Objects, Functions
const heros = ["shaktiman", "superman"]


let myObj = {
    name: "shrestha",
    age:22
}



//function(){} //function definition

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);



///////////////////////////////
//stack memory = primitive = copy
//, heap memory = non primitive

let myPrimitve = "primitive"
let anotherName = myPrimitve //passing duplicate copy only
anotherName = "hahaha"
console.log(myPrimitve);
console.log(anotherName);

let userOne = {
    email: "user1@gmail.com",
    id: 1
}

let userTwo = userOne //passing original reference

userTwo.email = "updated@gmail.com"

console.log(userOne.email);




