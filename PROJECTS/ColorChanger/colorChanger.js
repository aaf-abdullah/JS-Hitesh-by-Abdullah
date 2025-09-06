// const buttons = document.querySelectorAll('.button') //so first of all i select all the button using query selector all method .and hold in a variable
// //console.log(buttons); //so i got the nodelist of all button.so if nodelist we got we apply for each loop on this
// const body = document.querySelector('body')

// buttons.forEach( function(btn){
//       // console.log(btn); // so in this we got the whole html span
//         btn.addEventListener('click', function(e){
//             // console.log(e);
//             // console.log(e.target);

//             if(e.target.id === 'grey'){
//                 body.style.backgroundColor = 'grey'

//             }
//             if(e.target.id === 'yellow'){
//                 body.style.backgroundColor = 'yellow'
//             }
//             if(e.target.id === 'white'){
//                 body.style.backgroundColor = 'white'
//             }
//             if(e.target.id === 'blue'){
//                 body.style.backgroundColor = 'blue'
//             }
//         })
// });

const greyButton = document.querySelector('.button')
console.log(greyButton);

const H1 = document.querySelector('h1')
  //console.log(H1); 


greyButton.addEventListener( 'click', function(e){
        // console.log(e)
        // console.log(e.target)
        H1.innerHTML = ' i am changed by clicked'
    H1.style.backgroundColor = 'red'
    H1.style.padding = '2px'
    H1.style.borderRadius ='21px'
            
})




  
// H1.addEventListener('click', function(e){
//         if(e.target.id === 'grey'){
//             H1.style.innerHTML('clicked in grey button')
//         }
// })