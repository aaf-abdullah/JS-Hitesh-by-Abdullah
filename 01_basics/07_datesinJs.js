//so lets know about the dates

let myDate  = new Date()

// console.log(myDate.toString()); //Sun Jun 08 2025 18:22:07 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Jun 08 2025
// console.log(myDate.toLocaleString()); //6/8/2025, 6:24:18 PM
// console.log(typeof myDate); //object



/* */
let myCreateDate1 = new Date(2025, 0, 06)//2025-01-06T00:00:00.000Z

let myCreateDate2 = new Date(2024, 0, 06, 5, 3)//2024-01-06T05:03:00.000Z
let myCreateDate3 = new Date('2025-01-06') //2025-01-06T00:00:00.000Z
let myCreateDate4 = new Date("06-16-2004")//2004-06-16T00:00:00.000Z

// console.log(myCreateDate4.getTime);//[Function: getTime]
// console.log(myCreateDate4.toLocaleDateString()) // 6/16/2004
//console.log(myCreateDate4);
// console.table(myCreateDate1, myCreateDate2, myCreateDate3)



let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1749408171592
// console.log(Math.floor(Date.now()/1000));


let anotherDate = new Date()
console.log(anotherDate); //2025-06-08T18:49:11.215Z
console.log(anotherDate.getMonth() + 1); //6
console.log(anotherDate.getDay()); //0
console.log(`${anotherDate.getDay()} and the time`)


anotherDate.toLocaleString('default', {
    weekday : "long",
})


//further knowing the allll accessibilty of the date  and time functions you must go to browser.

// node 01_basics/07_datesinJs.js