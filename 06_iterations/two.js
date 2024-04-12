const myNumbers = [1,3,4,5,6,7,8,4,5]

//const newNums = myNumbers.map( (num) => {return num + 10 })

const newNums = myNumbers
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter ( (num) => num >= 40)
console.log(newNums);



const myNumberss= [1,3,4,5,6,7,8,4,5]
const myNums = myNumberss.reduce(function(acc, currval){
    return acc + currval
}, 0)
console.log(myNums);


