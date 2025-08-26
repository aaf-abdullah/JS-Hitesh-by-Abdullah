//FOR LOOP

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
} //and here is the element doesnt access the global scope.bcz of block scopes

//when we use for loop first of all we initialize the variables,and then cheacking the condition,if condition is true then execution the block element value. and when then execution is end,again its increases or decreases the index value .and continue so on
//another problem is if index value is doesnt change then loop is run inifite times




//CONDITIONS INSIDE THE LOOP

for (let i = 0; i < 7; i++) {
    const element = i
     if (element == 5){
       // console.log('5 is the best number')
    }
}





//LOOP INSIDE THE LOOP

for (let x = 0; x <= 5; x++) {
   // console.log(`outer loop value ${x}`);
    for (let y = 0; y <=5 ; y++) {
      // console.log(`inner loop value ${y} and inner loop ${x}`);
       // console.log(x + '*' + y , ' = ' + x*y); //
        
    }
}



let myArray = ['thor', 'hulk', 'spiderman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
}




//BREAK AND CONTINUE

for (let index = 1; index <= 10; index++) {
    if (index == 5){
       // console.log('detected 5');
        break //AFTER break code is executed then code is stop 
    }
   //console.log(`value of i is ${index}`);
}




for (let index = 1; index <= 10; index++) {
    if (index == 5){
        console.log('detected 5');
        continue //after the continue is executed then other loop will continue
    }
   console.log(`value of i is ${index}`);
}





// node 04_iterations/01_loop.js