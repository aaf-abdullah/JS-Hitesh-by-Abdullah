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
            rejcet('ERROR: SOMETHING WENT WRONG') //
        }
    },1000)
})

const username =  promiseFour.then( (user)=>{
    console.log(user);
    return user.username
})