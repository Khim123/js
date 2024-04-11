//immediate invoked function expressions

(function chai(){ //named IIFE
    console.log(`DB CONNECTED`);
})();


//put function definition inside parenthesis ()() and call the function
//global variable pollution 

//using arrow function
( () => {
    console.log(`twooooo`)
})();

//using arrow function
(() => console.log(`threee`))();

//passing variables
( (name) => { //unnamed IIFE
    console.log(`${name}!!! how are u??`);
})('khiimmmmm');


//javascript execution context
//1. js code = global EC -> EC => THIS
//functiona execution context
//eval execution context

// 2. js code -> memory creation phase  -> variables store
//val1 -> undefined


// 3. execution phase
//val1 = 10
//addNum = new variable environment + execution thread







