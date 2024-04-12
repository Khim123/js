//<, >, <=, >=

//= 
// == equal


if (2 == "2" { //true 
    console.log("execurted"); 
}


if (2 === "2" { //type check, false
    console.log("execurted"); 
}

const score = 200
if (score > 100) {
    var power = "fly" //var can be access outside, bad
    //let power = "fly" 
    console.log(`user power : ${power}`);
}

console.log(`user power : ${power}`); //scope issue but if used var then no scope issue (bad practise)

//var = scope issue,


const balance = 1000
if (balance > 100) console.log("test"); //can be written this way also in single line

if (balance > 100) console.log("test"), console.log("testdfsfsfds"); //can be written this way also in using  comma but vv bad practise

