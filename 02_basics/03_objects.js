const tinderUser = new Object() //singleton object
const tinderUser2 = {} // non singleton object, same as above to declare object


console.log(tinderUser);
console.log(tinderUser2);


//Object.assign() = add multiple objects
// or we can use spread concept => 
//const obj3 = {...obj1, ...obj2}

const userInfo = {
    name: "khim",
    phoneNum: 3202173370,
    address: {
        streetName: "4411 katama square",
        zipCode: "20111"
    }
} 

const userInfo2 = {
    name: "shrestha",
    phoneNum: 1234,
    address: {
        streetName: "222 hahaha square",
        zipCode: "111"
    }
} 


const result = Object.assign({}, userInfo, userInfo2);

const result2 = {...userInfo, ...userInfo2};

console.log(result);
console.log(result2);



console.log(userInfo.address.streetName);

console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));
console.log(Object.hasOwnProperty('name'));


