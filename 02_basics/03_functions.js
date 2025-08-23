
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

addTwoNumbers1(1, 2) // 3
addTwoNumbers1(1, '2') //12 || so this is happen bcz of js think that if 6 is string than the other one is also string thats why

addTwoNumbers1(5, 'a')
addTwoNumbers1(5, null)
//so this is a problen where we need to check the data types of the numbers,thats in function body we need to apply condition


const result = addTwoNumbers1(7, 8) //so in js we hold the result in a variables so technically the function execution values and the variables result values are same but here is a problem 

//console.log('the RESULT:', result) //RESULT: undefined
//so this problem is happen bcz of the function,when i exeute () the function,but not returning the function.



//WHEN RETURN IS USED

function addTwoNumbers2(number1, number2){
     // let result = number1 + number2 
    // return result //1st way

     console.log('NAYEEM')

    return number1 + number2 //2nd way
    //after the return keyword there is no return or execution.
}

//const result2 = addTwoNumbers2(3, 5) 
//console.log("Result: ", result2);




function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessage('hitesh')

// node 02_basics/03_functions.js