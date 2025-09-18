//object literal

const user1 = {
    username: 'abd',
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log('got user details from db')
        //console.log(`username: ${username}`)//when execute js engine doesnt know wehere is username,that why error showing
        //console.log(`username: ${this.username}`) //if i acccess the value outside the scope ,then we need to use this.

        //console.log(this) //current context
    }
}

//console.log(user.username)
//console.log( user.getUserDetails())
//console.log(this)//in global context they give us a empty parenthesis{} .bcz there is no value inside the {} || but in browser we have many things, like fettch ,api,.... that why in browser if we use this in return we got the window object.but in node emvironment there is nothing but a parenthesis {} we got.




//CONTRUCTOR FUNCTION

//const promiseOne = new Promise() //
//const date = new Date() /// so here is new is a constructor function ..its allows a obj literal to lots or multiple instance make



function user2(username, loginCount, isLoggedIn){
    this.username = username //in left side variable this is our variable on the other hand the right side username varibale is those value which is pass by me
    this.loginCount= loginCount
    this.isLoggedIn= isLoggedIn

    return this //returning the obj where we pass some values
}


const userOne = user2('abdullah', 7, true) //previous function where we doing this but 
const userTwo = user2('chai coffee', 8, false) //this is overwriting the upper vlaues.

console.log(userOne) //print userone and two both. a messed upp code but if we use new function

//so the constructor function is gave us new instance so that code is doesnt messed up,or over write. 
const userThree = new user2( 'thor', 4, true)
const userFour = new user2( 'batman', 3, true)
console.log(userThree)
console.log(userFour)
console.log(userFour.constructor)//we got the function that we called.



//all of this is happend bcz returning this form the function but if we doesnt returning this from the function what happend ..so its return automatically called implicitely return by defoult.




//NOTES for new keyword

//1.when we use "new" keyword, a empty object was created.thats called "instance"
//2.a constructor function called by using "new" keyword 
// 3. and this keyword use injecked inside this empty obj






//node 09_OOPS/01_oop.js