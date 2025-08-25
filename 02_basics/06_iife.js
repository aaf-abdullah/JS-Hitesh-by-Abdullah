//immedietly invoked funnction expressions

//so mainly iife used is when global scopes variable created problem with block scopes,mean that global scopes variable polluted or take values.. again mean that parants funnction to child function access

//(wrote the function defination)(execution)  and actually this is an iife

//so iife is those function who will immediatly executed,for not polluted the global scopes



//NAMED IIFE 

function coffee1() {
    console.log(`DB CONNECTED`);
}
coffee1();


(function coffee2(){
    console.log(`DB CONNECTED again`);
})();  //so this is an iife which is safe from the global scopes,or this is isolated from the gobal scopes


//so in the iife the most important things of invoked is started but they dont know where is ended so we need to add semicolon(;) in the end || SO if 2 iife write together after another then must use semicolon


//UNNAMED IIFE(array function)

( () => {
    console.log(`DB CONNECTED TWO`);
} ) ()



( (company) => {
    console.log(`DB CONNECTED TWO ${company}`);
} ) ('meta')





//   node 02_basics/06_iife.js






// 05:55:33 -  How does javascript works behind the scene | so here is some browser works you would like see yourself