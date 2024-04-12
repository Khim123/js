const userEmail = "shresthakhim12@gmail.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("no user email");
}


//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}



const userEmail2 =  [];
if (userEmail2.length === 0) { 
    console.log("array is empty");
}



const emptyObject = {}
if (Object.keys(emptyObject).length === 0) { //Object.keys(emptyObject) returns array
    console.log("object is empty");
}



//nullish coalescing operator (??) : null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //10 assign if not 10 null will get assigned
val1 = undefined ?? 15  // 15 gets assigned
val1 = null ?? 10 ?? 15 // 10 gets assigend 
console.log(val1); //5



//Ternary opeator
condition ? true : false


