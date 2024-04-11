function sayMyName() {
    console.log("KKHIM")
}

//sayMyName();

// function addTwoNum(number1, number2) {
//     console.log(number1+number2)
// }

function addTwoNum(number1, number2) {
   let result = number1 + number2
   return result
}

const result = addTwoNum(5,6);



function loginUserMessage(userName = "sam") { //if user do not provide anything, sam will be default
    if(userName === undefined) { //!userName
        console.log("plz enter username")
        return   
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("khim"))



//spread/rest operator
function calculatePrice(...num1) {
    return num1
}

console.log(calculatePrice(200,300,400)) //[ 200, 300, 400 ]


//spread/rest operator
function calculatePrice(val1, val2, ...num1) { //skip first 2 val
    return num1 
}

console.log(calculatePrice(200,300,400,500,600)) //[ 400, 500, 600 ] 


const user = {
    username: "khim",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);

handleObject({ //directly passing object as parameter
    username: "khim",
    price: 199
})




//******************************
const myArray = [200, 300, 400]
function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 300, 400])) //directly passing array








