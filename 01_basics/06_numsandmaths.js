const score = 400
console.log(score); //400

//both are number but if we do by Object, it will specify everything

const balance = new Number(100); //[Number: 100]
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.5967
console.log(balance.toPrecision(3)); //100

console.log(Math.random()); //0-1

console.log(Math.floor(Math.random()*10)+ 1);

const max = 20
const min = 10

console.log(Math.floor(Math.random()* (max-min +1))+ min)