
//WHY AND HOW DECLARE A FUNCTION

function myName(){
//     console.log("a");
//     console.log("b");
//     console.log("d");
}

//myName// this is a references
//myName()// this is execution

//SO this is the declaration of function,where it use when same things executed again and again.and function is itself a new javascript code executoe,mean that anything happpnd in the function doesnt effect outside the functin,without references or call



function addTwoNumbers1(number1, number2){
    //console.log(number1 + number2);
}


//addTwoNumbers() //NaN || so where Not a Number shown becouse the arguments is empty,where i call the function

// addTwoNumbers1(1, 2) // 3
// addTwoNumbers1(1, '2') //12 || so this is happen bcz of js think that if 6 is string than the other one is also string thats why

// addTwoNumbers1(5, 'a')
// addTwoNumbers1(5, null)
// //so this is a problen where we need to check the data types of the numbers,thats in function body we need to apply condition


// const result = addTwoNumbers1(7, 8) //so in js we hold the result in a variables so technically the function execution values and the variables result values are same but here is a problem 

//console.log('the RESULT:', result) //RESULT: undefined
//so this problem is happen bcz of the function,when i exeute () the function,but not returning the function.



//WHEN RETURN IS USED

function addTwoNumbers2(number1, number2){
     // let result = number1 + number2 
    // return result //1st way

     //console.log('NAYEEM')

    return number1 + number2 //2nd way
    //after the return keyword there is no return or execution.
}

//const result2 = addTwoNumbers2(3, 5) 
//console.log("Result: ", result2);






function loginUserMessage1(username){
   // return `${username} just logged in`
}
//loginUserMessage1('hitesh')// similerly i return the value and executed 

// console.log(loginUserMessage1("NAYEEM")) //NAYEEM just logged in
// console.log(loginUserMessage1('')) // just logged in
// console.log(loginUserMessage1())  //undefined just logged in [interview iomportant]





function loginUserMassege2(username){
    if(username === undefined){
            //if(!username){ same as upper code but kinda professional

            console.log('please enter your username')
            return //after this code execute than other will  not
    }
    return `${username} welcome to the funcion`
}
//console.log(loginUserMassege2())



function loginUserMessage3(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage3())
//console.log(loginUserMessage3("hitesh"))





//FUNCTION WITH too MANY PARAMETERS NEEDED

function calculateCartPrice1(num1){
    return num1
}
console.log(calculateCartPrice1(2)) //2
console.log(calculateCartPrice1(200, 499,400)) //problem is they dont calculate the other values,bcz of not declaring the wnough parameers ,so we used the parameters called REST PARAMETER(...)it convert all given values in arguments to an ARRAY | so another exaple if we use different parameters and then use rest parameter then first of all hold the value those paameters then other all in rest parameeters.
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 499,400, 600)) //convert an array [200, 499,400, 600].if val1 and  not declare then
console.log(calculateCartPrice2(200, 499,400, 600)) /// [400, 600] bcz of val1 and 2 hold the first 2 values bu we dont return those.






//HOW TO PASS THE OBJECT IN FUNCTION

const user = {
    username: "hitesh",
    prices: 199 //Username is hitesh and price is undefined | if we change the name prices then the issue was created as undfined
}
function handleObject(anyobject){//so this is a gneric wa to pass the objec if we use user as a parameter then this could be error. 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//Username is sam and price is 399
}

handleObject(user)// 1st way
handleObject({
    username: "sam",
    price: 399
})




//ARRAY IN FUNCTIONS

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ //similerly a generic form getArray but not the name myNewArray cz this is a error
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));





// node 02_basics/03_functions.js
