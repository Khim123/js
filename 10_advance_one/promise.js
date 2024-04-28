const promiseOne = new Promise(function(resolve,reject){
    //Do an async calls - db calls, cryptography, network calls
    setTimeout(function(){ 
        console.log('async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async task 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeOut(function(){
        resolve({userName : "Chai", email : "chai@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeOut(function(){
        let error = true;
        if(!error){
            resolve({userName : "khim", password: "123"})
        } else {
            reject('ERROR: sth went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("promise is resolved or rejected")
})

//console.log();

const promiseFive = new Promise(function(resolve, reject){
    setTimeOut(function(){
        let error = true;
        if(!error) {
            resolve({username : "khim", phone : "23232"})
        } else {
            reject('errorrrrr')
        }
    }, 1000)
}); 

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



async function getAllUsers() {
    try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users');
         const data = await response.json();
         console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}s

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(resposne) {
   return response.json();
}).then(function(data) { console.log(data)
}).catch((error) => console.log(error))