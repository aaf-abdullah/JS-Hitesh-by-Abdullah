const score = 300
// console.log(score); //this is we dont defiend num or not.

const balance =new Number(2500)// but there is specificly defined this is number data types.

// console.log(balance);// [Number: 200]

//  console.log(balance.toString().length);// so this basically defined how long the number is in string.
//  console.log(balance.toFixed(5))// in this keywords they defined how many 0 affter the number.

const fractionNumber = 425.34332
// console.log(fractionNumber.toPrecision(7)); // this keyword deffined that how many number count depend on the given conditon.

const hundreds = 2000000
// console.log(hundreds.toLocaleString('en-BD'));//2,000,000
// console.log(hundreds.toLocaleString('en-IN'));//20,00,000
// this is defined a count of bd or in s culture.



//===============MATHS=====================

/*

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)) //this keyword doing -ve number into the positive.
console.log(Math.abs(-6745))

console.log(Math.round(4.6));//this keyword doing that if the numberr is upper the 0.5>= then its give us the integer of next number.and vice versa.
console.log(Math.round(4.1));
console.log(Math.round(4.5));

console.log(Math.ceil(4.5));//this keyword doing any fraction number into the next integer number.
console.log(Math.ceil(4.1));


console.log(Math.floor(4.9)); //this keyword is doing that any fraction number into the previous integer number.

console.log(Math.min(3, 5, 6, 5)); //this is find the minimum number.

console.log(Math.max(4, 3, 6, 8));//this is find the max number.

*/
console.log(Math.random()) // 0.14922821902463168 then 0.18440227959746713 //this is the random number given by code editor. which is less than 1.

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 30
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



//for extra known about math and nu,s go to browser.

// node 01_basics/06_nums_and_maths.js