//destructure of objects {}

const course = {
    courseName : "js in hindi",
    price: "1000"
}

//course.courseName

//use this instead, if same variable is used in multiple places using dot opertor
const {courseName} = course

console.log(courseName);

//short form, if u dont want to use courseName
const {courseName : a} = course
console.log(a);

//json
{
    "name": "khim",
    "price": "1000"
}





