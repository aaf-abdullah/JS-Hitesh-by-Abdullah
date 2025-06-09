//lets div down into the array

const myArray1 = [0, 1, 2, 3 , 4, 5 ,6] //so array accesicng start with 0.
const myHeros =['batman', 'thor', 'loki']
const myArray2 = new Array(1, 2, 3, 4, 5)
//console.log(myArray1[0]);

//Array Methods

myArray1.push('hey cutie') //push is the methods of adding elements in array.
//myHeros.push('joker')
 //myArray1.pop() //remove the last element of array
//console.log(myArray1);
//console.log(myHeros);
//myArray1.unshift(8)//this method add element in first of the array.
//myArray2.shift(4) //remove thhe first element.
//console.log(myArray1);
//console.log(myArray2);
//console.log(myArray1.includes(5)); //this method check the element in array if doesnt then false,if does then true.
//console.log(myArray1.indexOf(0));//so this is actually doing basis on the condition we given,they gave us what position the array element is.

const newArray = myHeros.join() //this join mehtods converted array to string with same values.
// console.log(myHeros);
// console.log(typeof myArray1); //object
// console.log(typeof newArray);//string

//slice and splice

//console.log('ABC ', myHeros); // ABC  [ 'batman', 'thor', 'loki', 'joker' ]
const myNewArray1 = myArray1.slice(1, 3) //this method say us start with 1 and dont include 3.
// console.log(myNewArray1);
// console.log('b', myArray1);

const myNewArray2 = myArray1.splice(2, 6) //so this method actuallly change the array.if we discuss first the condition we given,basis on this the array extract the main array,and basis on this conditiion what we given in condition they add an array.
//console.log('c', myArray1);
//console.log(myNewArray2);


//==================ARRAY-2=====================


const marvel_superHeros = ['thor', 'ironman',  'spiderman' ]
const dc_superHeros = ['superman', 'batman', 'flash']

//console.log(marvel_superHeros.push(dc_superHeros))//this is counting how many array element on this array,and push is count 1 array elemnt.
marvel_superHeros.push(dc_superHeros)//this push is doing same things add array inside the another array.//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_superHeros);
// console.log(marvel_superHeros[3][2]);

const allHeros = marvel_superHeros.concat(dc_superHeros)
// console.log(typeof allHeros);//object
 //console.log(allHeros);

const allNewHeros = [...marvel_superHeros, ...dc_superHeros]
//console.log(allNewHeros); 
//this concat and ... those doing same thing 

const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5]]]
const anotherRealArray = anotherArray.flat(Infinity) //this mehtod converted complex array to a simple array.
//console.log(anotherRealArray);


// console.log(Array.isArray('adiba neha'));
// console.log(Array.from("abdllah fahim"));//this mehtod converted all word to a string in a a array with space.
// console.log(Array.from({name: 'insiya'})); //[]

let score1 =200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2,score3)); //so this method converted all variables into a single array.




//=========further known about array go to browser instead===========

// node 02_basics/01_array.js