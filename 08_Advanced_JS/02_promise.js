//CREATION OF PROMISES


const promiseOne = new Promise(function(resolve, rejcet){
    
    //do an async task
    //DB cals ,, cryptography ,, network calls,, 
    setTimeout(function(){
        console.log('asunc task is completed')
        resolve() //after this execution of resolve then is connected with it
    }, 1000)


} )//its like an obj,//PROMISE REDUCE THE CALLBACK HELL


//CONSUMTION OF PROMISE

promiseOne.then( function(){
    console.log('promise consumed');
})//then is connection with resolve  



//WITHOUT HOLDING IN THE VARIABLE 

new Promise(function(resolve,rejcet){
    setTimeout( function(){
        console.log('async task 2')
        resolve()
    }, 1000)
}).then( function(){
    console.log('asyncs 2 resolved');
})




//PARAMETER PASS ON THE RESOLVE 

const promiseThree = new Promise(function(resolve,rejcet){
    setTimeout(function(){
        resolve({ //in resolve parameter we can pass obj array ...
                username: 'abd', email: 'abd.@gmail.com'
        })
    },1000)
})
//data consumtion to the promise
promiseThree.then(function(user){
    console.log(user)
})





const promiseFour = new Promise(function(resolve,rejcet){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'abdullah', password:'123 '})
        }else{
            rejcet('ERROR: SOMETHING WENT WRONG') //else case the reject is give an error,and we write the error if we want.
        }
    },1000)
})

//const username =  promiseFour.then( (user) => { //dont hold the value in the variable.its an error.
promiseFour.then( (user) => {
    console.log(user);
    return user.username //the return value is going the username variable
}).then( (myusername)=>{
    console.log(myusername)
}).catch(function(errrors){
    console.log(errrors) //ERROR: SOMETHING WENT WRONG
})



//console.log(username) //this is not gonna work like this we dont hold the value in the variable





const promiseFive = new Promise(function(resolve,rejcet){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'abdullah', password:'123 '})
        }else{
            rejcet('ERROR: SOMETHING WENT WRONG') //else case the reject is give an error,and we write the error if we want.
        }
    },1000)
})

//const username =  promiseFour.then( (user) => { //dont hold the value in the variable.
promiseFour
.then( (user) => {
    console.log(user);
    return user.username //the return value is going the username variable
})
.then( (myusername)=>{
    console.log(myusername)
})
.catch(function(errrors){
    console.log(errrors) //ERROR: SOMETHING WENT WRONG
})
.finally( () => { console.log('the promise is either resolved or rejected');
})







const promiseSix = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true //false //if we write the false the code will be executed,but....
        if(!error){
            resolve({username:'JAVAscript', password:'123 '})
        }else{
            reject('ERROR: JS WENT WRONG') //else case the reject is give an error,and we write the error if we want.
        }
    },1000)
})

//async await //exactly lookk like a .then .catch type  wait some time if it happend then go away nerither error instantly.


async function consumePromiseSix(){
   const response =  await promiseSix //so promise is a obj that why dont consumme promise()  like that.bcz its for function
   console.log(response);
}
consumePromiseSix()






const promiseSeven = new Promise(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'JAVAscript', password:'123 '})
        }else{
            reject('ERROR: JS WENT WRONG') //else case the reject is give an error,and we write the error if we want.
        }
    },1000)
})

async function consumePromiseSeven(){
  try {
        const response =  await promiseSix 
        console.log(response);
  } catch (error) {
     console.log(error);
  }
}

consumePromiseSix()




//====


async function getAllUsers1() {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}
getAllUsers1()




async function getAllUsers2() {
    try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
         const data = await response.json()
         console.log(data)
    } catch (error) {
        console.log('E', error)
    }
}
getAllUsers2()



//UPPER ASYNC AWAIT WORK HANDLING ANOTHER WAY LIKE THIS


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) =>  console.log(error) )





