//TRUTHY OR FALSY STATEMENT

const userEmail = 'a@abd.com'

if (userEmail) {
    console.log('got user email');
    
} else {
    console.log('dont have user email');
}



const userEmail2 = ''

if (userEmail2) {
    console.log('got user email');
    
} else {
    console.log('dont have user email');
}


const userEmail3 = []

if (userEmail3) {
    console.log('got user email');
    
} else {
    console.log('dont have user email');
}



 // HOW TO CHECK ARRAY IS EMPTY OR NOT
const userEmail4 = []

if (userEmail4.length === 0) {
    console.log('Array is empty');

}


 // HOW TO CHECK OBJECT IS EMPTY OR NOT
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
        console.log('ovject is empty');
}




//falsy value
// false , 0, -0 , BigInt =>0n , "", null, undefined, NaN,

//truthy value
//'0' , 'false', ' ', [], {}, funnction(){}, 



//so truthy 1st is truthy value assuming there is no comparison and 2nd is also same no comparison where empty string is assuming falsy value.




//some knowledge about browser truthy or falsy



//  node 03_control_flow/truthy.js