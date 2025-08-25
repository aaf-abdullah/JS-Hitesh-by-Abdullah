//if statement


if (true) {
    //if condition is true then if run but if condition is false the condition doesnt run if.
}





//compare value, > greater than | < less than | <= | == checking is equal or not, != not equual,  === checking the  data type also (2 === '2')




const isUserLoggedIn = true
const temperature = 41


if (temperature < 44) {
    console.log('less than 44');
} else { // its is a conditional code,mean that if if statement code is executed, than else is doesnt.and vice-versa
console.log('temparature is greater than 44');
}



const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`user power: ${power}`);
}
   // console.log(`user power: ${power}`); //error bcz of scope,doesnt access the power variable in global scopes





//implicit code doesnt reccomended 

const balance = 1000
if (balance > 500) console.log('test');, console.log('test2');


//NESTING 

if (balance > 500) {
    console.log('less than');
    
}else if (balance < 750) {
        console.log('less than 750');
} else if ( balance < 1000) {
    console.log('less than 1000');
} else {
    console.log('lesss than 2000');
}




const UserLoggedIn = true
const debitCard = true
const loGGedInFromGoogle = false
const loGGedInFromEmail = true


if (UserLoggedIn && debitCard) {
    console.log('ALLOW TO PUCHASE');
    //SO THIS && OPERATOR CHECK the condition if both or multiple condition is true, than if is executed.neither not
}


if (loGGedInFromGoogle || loGGedInFromEmail) {
    console.log('user logged in');
    // so this || is check same multiple condition check if one statement is true than if is executed.
}


// node 03_control_flow/if_else.js