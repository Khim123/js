const user = {
    userName: "Khim",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName = "sam" //change context/value
user.welcomeMessage()


//console.log(this); // {} give empty object if u call this outside
//console.log(this); // {} do same in browser it gives window object

console.log("*******"); 
function chai(){
    let userName = "khim"
  //console.log(this) //wont work 
  console.log(this.userName) // undefined..... THIS KEYWORD wont work like object. IMP
}


chai()




const chaai = function () {
    let userNamee = "khim"
    console.log(this.userNamee) //wont work same reason as above
}

chaai() 

//arrow function = remove function keyword and add arrow key
const coffee =  () => {
    let userNamee = "khim"
    console.log(this.userNamee) //wont work same reason as above
}

coffee()

const addTwo = (num1, num2) => {
    return num1+num2
}



//implicit return -> remove curly braces and no need of return keyword
// if curly braces used then RETURN 
// and if u use parentheseis then no need to return
const addFunction = (num1, num2) => (num1+num2) //return num only

const addFunction2 = (num1, num2) => ({name: "khim"}) //to return object, we still need to put inside ()


const myArray = [2,4,5,3]
//myArray.forEach(() =>)



