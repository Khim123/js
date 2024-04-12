for (let index = 0; index < 10; index++) {
    const element = index;
}


const arr = [1,2,3,4,5]
//forof
for (const num of arr) {
    console.log(num);
}

//forof
const greetings = "helloworld"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//Maps= unique and maintain order
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATES")

console.log(map)

//[ 'IN', 'INDIA' ]
//[ 'US', 'UNITED STATES' ]









for (const key of map) {
    console.log(key)
}


for (const [key, value] of map) {
    console.log(key, '====>', value)
}
//IN ====> INDIA
//US ====> UNITED STATES








const myObject = {
    game1: 'cricket',
    game2: 'football'
}
//Object cannot be printed, it will give error
//for (const [key, value] of myObject) {
   // console.log(key, '====>', value)
//}





const myGameObjects = {
    game1: 'cricket',
    game2: 'football'
}
//forin loop to print objects,
for (const key in myGameObjects) {
    console.log(key) //print keys
}

for (const key in myGameObjects) {
    console.log(myGameObjects[key]) //print values
}


const programming = ["js", "rb", "py"]

for (const key in programming) {
    console.log(programming[key]) //print values
}



const programmingLanguage = ["js", "rb", "py"]
//for each method using array
programmingLanguage.forEach( function (item) {
    console.log(item)
} )


const coding = ["js", "rb", "py"]
//for each method using array
programmingLanguage.forEach( (item) =>  {
    console.log(item)
})



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// programmingLanguage.forEach( (item, index, arr) =>  {
//     console.log(item, index, arr)
// })



const myCoding = [
    {
        languageName: "javascriot",
        languageFile: "js"
    }, 
    {
        languageName: "java",
        languageFile: "jv"
    }, 
    {
        languageName: "c++",
        languageFile: "c programming"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageFile)
})


//foreach cannot return data
//use filter to return

//if u use scope, then we have to use return key word {} = return, () () no return needed
const myNums = [1,2,3,4,5,6]
const newNumss= myNums.filter( (num) => {
    return num > 4
})
console.log(newNumss);


//same thing can be achieved using forEach loop
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);

