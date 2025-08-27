

//FOR EACH LOOP is a property of an array

const coding =['js', 'rb', 'py', 'java', 'cpp']

coding.forEach( function (item){
    //console.log(item);
} )//1st way 


coding.forEach( (val) => {
   // console.log(val);
} )//2nd way



function printMe (item){
        //console.log(item);
} //3rd way

coding.forEach(printMe)//so here is the reference of the function,not the executed (),like this


//so basically for each loop is a array prototype or properties,if array is declare,in dot notaion use we apply the loop in array.but foreach loop want a callback function, in three way we executed the loop .in function its parameter basically get from an array.so in fuction parameter it have access the item,index and the whole array



coding.forEach(  (item, index, arr) => {
   // console.log(item, index,arr); 
})





//common operation

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(  (item) => {
      // console.log(item.languageFileName);   
})




//==============2nd part================

const coding2 =['js', 'rb', 'py', 'java', 'cpp']
const value = coding2.forEach( function (item){
   // console.log(item);

} )
//console.log(value); //undefined || so basically for each loop doesnt return any value though you use return ,




//FILTER LOOP in array

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum1 = myNums.filter( (num) => num > 4)

const newNum2 = myNums.filter( (num) => {
    return num > 4
 })

//console.log(newNum1) //[ 5, 6, 7, 8, 9 ]
//console.log(newNum2) 

//so filter is array loop like the for each loop,where for each doesnt return the value,but filter do.



//USING FOR EACH LOOP
const newNums3 = []
myNums.forEach( (num) => {
    if  (  num > 4){
        newNums3.push(num)
    }
} )
//console.log(newNums3);




//EXAMPLE LOOK LIKE DATABSE DATA

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks1 = books.filter ( (bk) => bk.genre === "History" )

userBooks1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

//console.log(userBooks1)




const userBooks2 = []
books.forEach( (bk) => {
        if ( bk.edition > 2000){
            userBooks2.push(bk)
        }
})
//console.log(userBooks2)



//========IF CALCULATION NEEDED THAN

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNum4 = myNumbers.filter((num) => {
   (num + 4)
    return 
})
//console.log(newNum4) //why filter doesnt works here /// BCZ OF map



//MAP METHOD in array doing also calculation 

const newNum5 = myNumbers.map( num => num + 10)
//console.log(newNum5);



//CHAINING IN ARRAY 
const mNums2 = myNumbers
        .map( (num) => num * 7)
        .map( (num) => num + 1 )
        .filter( (num) => num >= 33)
    //console.log(mNums2);
    



    


//REDUCE METHOD

const myNumbers2 = [1, 2, 3]

const myTotal = myNumbers2.reduce( function(acc, curval) {
   // console.log(`accumulator value is: ${acc} and current value is ${curval}`)
    return acc + curval
} , 6)

    //console.log(myTotal)

const myTotal2 = myNumbers2.reduce( (acc, curval) => {
    return acc + curval} , 2
        )
    //console.log(myTotal2)


const myTotal3 = myNumbers2.reduce((acc, curval) => (acc + curval), 0)
//console.log(myTotal3)

const myTotal4 = myNumbers2.reduce((acc, curval) => acc + curval, 0)
//console.log(myTotal4)




//example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(totalPrice)





//   node 04_iterations/array_loop2.js