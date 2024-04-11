let a = 10
const b = 20
var c = 30 // problem in scoping

if (true){
    let a = 10
    const b = 20
    //var c = 30
}

console.log(c);


//closure concept
//icecream - adult kid concept
function one(){
    const userName = "khim"
    console.log(userName);

    function two(){
        const website = "utuvbe"
        console.log(userName);
    }
    console.log(website);

    two()

}

one()



addOne(5) //will work
function addOne(num){
    return num+2
}




addTwo(5) //hoising concept will give error
const addTwo = function(num){
    return num+2
}