//for of loop [aray specific loop]
//[ ""," ", ""] or [{},{}{}]

// for (const element/iterator of object) {
    
// }
const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    //console.log(num);
    
}


const greeting = 'hello world!'
for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
}

//so in for of looop its work in a declare of new variable or iterators of oject, array or string.so here hee the variables is hold the the data first from the array,string or object.its repeatable.until the loop end,or break keyword have in this loop.so there is no need to condition apply,





//Maps it itself a object,it will holds key value pairs || and this is store a unique values

const map = new Map()
map.set('BD ', 'Bangladesh')
map.set('USA', 'AMERICA')
map.set('SWT' , 'SWITZERLAND')
map.set('BD ', 'Bangladesh')

//console.log(map);//so here map known for unique valeues holder.if there is one key value set two times map is set just one time


for (const key of map) {
    //console.log(key);  //so if i print the map in loop ,the whole map obect given in array form.but
}

for (const [key, value] of map) { //so if i wrote this array is destructure
   // console.log(key, '=' , value);
}



const myObj = {
    'game1': 'NFS',
    'game2': 'GTA5'
}

// for (const [key , value] of myObj) {
//    // console.log(key, 'and the game is', value); //ERROR  and say object is not iterable
// }







//======FOR IN LOOP for obj=====

const myObj2 = {
        BD  : "Bangladesh",
        USA : "AMERICA",
        SWT : "SWITZERLAND"
}
for (const key in myObj2) {
       // console.log(key , 'is for', myObj2[key]); 
}


const Programming =['js', 'rb', 'py', 'java']
for (const key in Programming) {
    //console.log(key);
   // console.log(key , '-', Programming[key]);
}



//so basically for in loop is same declaration as for of loop,but the difference is,in for of loop if i printed the key value they give me the whole array,string or so,, but in for in loop hey give me the keys not the value so is i need to print the value we understand the concept of basic object ,array.. so Array[key],Object[key].



for (const key in map) { //so map is also not iteratable like an object
   //console.log(key);
}






//   node 04_iterations/array_loop1.js