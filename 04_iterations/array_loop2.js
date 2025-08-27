

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
        console.log(item.languageFileName);   
})




//   node 04_iterations/array_loop2.js