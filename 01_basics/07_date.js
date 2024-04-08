let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); //Object

let myCreateDate = new Date(2023, 0, 23); //0  months (starts with 0)
console.log(myCreateDate.toDateString());


let myCreateDateNew = new Date("2023-01-23"); //0  months (starts with 0)
console.log(myCreateDateNew.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); //convert into seconds


let newDate = new Date()
console.log();


