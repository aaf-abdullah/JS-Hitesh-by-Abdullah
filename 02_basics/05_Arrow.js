



const user = { //current context inside the curley bracis
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
       // console.log(`${this.username} , welcome to the website`); //this referering the current context

        //console.log(this); //and this method refferd a current context innside the block scopes like username ,price,welcomeMassege and so on iin an  object
        
    }
}
// user.welcomeMessage() //this line of code the context is same as before
// user.username = 'chowdhury' //in here we changge the context 
// user.welcomeMessage() //then current context given in this method executed as a current context.

//console.log(this); //in node environment 'this' method refferend a empty object in a global object || but in brwoser we got the window || in browser the global object is actually window

//so 'this' method is reffering the current context | context is like a values..   mean that in a block scope anything accessable with this keyword






// IS THIS METHOD IS USED IN FUNCTION?

function  chai1(){
    let username = "Abdullah"
    //console.log(this.username); //undefined
}
chai1() // wtf too much value in the terminal WITHOUT the value decclare,aftter the varibale declare or if we add the currennt context in the function then give me the undefined value. so this method is appply on the objects not in a function.




const chai2 = function(){
     let username = "Abdullah"
    //console.log(this.username);//undefined
}
chai2() //this is another type of function declaration.this is also same as the upper function.




const chai3 = () => {
    let username = "Abdullah"
    //console.log(this.username)//undefined
    //console.log(this) //{}
}
chai3() 

//interview question:- what is the difference between arrow function and other function




//basic arrow funnction
const addTwoNum1 = (num1, num2) => {
    return num1 + num2
}
//console.log(addTwoNum1(3, 4))




const addTwoNum2 = (num1, num2) =>  num1 + num2 //this also arrow function but it called implicit return
console.log(addTwoNum2(3, 4))

const addTwoNum3 = (num1, num2) => ( num1 + num2) //so here if we dont use {} curley bracis then need to write the returnn keyword,but if we use ()this then no need to write the return keyword
console.log(addTwoNum3(3, 4)) 


//so implicit return mean there is no need to use return keyword || or another where we need to use return keyword its called explicit

const addTwoNum4 = (num1, num2) => ( {usernname : "abd"}) //if we need to return object then we need to rap up in a bracket
console.log(addTwoNum4(3,4));




//APPLY ARROW FUNCTION in loop

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(funnction(){}) 
// myArray.forEach(() => () 








//  node 02_basics/05_arrow.js
