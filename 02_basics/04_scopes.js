//this start with the varible let var and const

let a = 1
var b = 2
const c = 3
// console.log(a);
// console.log(b);
// console.log(c);

//{} curley bracis  this is a scope in every language.if this came in function loop condition then this is scope.but not in objecs




var z = 300
if (true) {
    let x = 10
    const y = 20
    var z = 30 
    console.log("INNER: ", x); //this x is available only on this block scopes
}
//console.log(x); //error
//console.log(y);//error
console.log(z); //executed 



// so here is the scopes is inner the if condition carley bracis {} called block scopes | outside the curley bracis all are global scopes.
//so scopes { } are available inside the curley bracis there is o access outside i mean global scopes.



//for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    //we want that this index value or i value is availble on this block scopes not outside the scopes.




//browser global scopes and node or code environment global scopes are different from another


//====================PART-2========================Scope level and mini hoisting






//NASTED SCOPES


//repeat the vedio to understand the concept if you dont.
function one(){
     const username = 'rijhi'
     function two(){
         const website = 'youtube'
            console.log(username);
     }
     console.log(website);
     two()
}
one()

//so here is the concept of this scopes is here is declare 2 function,where parents function doesnt access the child funciton but child funnction acces the parents function.





if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);







//======INTERENSTING ====




addone()// no error bcz ,..............
function addone(num){
    return num + 1
}
addone(3)     //this is also function declaration,to hold in variable | so in this function ,if we call the funntion before function declaration there is no issue or no error in the codeb.but



//addTwo(5) this is error bcz of the type of funnction declare
const addTwo = function(num){
    return num + 2
}
addTwo(5) // this is another way to function declaration | in this type of function declaration where function is hold in a variable,if we call the function before function declaration,there will be error in the code.



//this concept is apply on hoisting 


//node 02_basics/04_scopes.js