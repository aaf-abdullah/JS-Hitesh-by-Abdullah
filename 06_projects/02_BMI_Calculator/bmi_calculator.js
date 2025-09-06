// const form = document.querySelector('form')

// //when form is submitted .two way to sumitted formm === 1- post type || 2-get type  || when submitted the form,they going to server,that is important to stop


// //const height = parseInt(document.querySelector('#height').value) || if i declare the height or weight in there i mean outside of the event,then they hold inside there empty value,thats why we get the value when someone clicking the height box.|| this usecase will give you empty vlaue


// form.addEventListener('submit', function(e){
//     e.preventDefault() //this is hold/stop the value to going the server 

//  const height = parseInt(document.querySelector('#height').value); // the value we got is string type so string to integer type conversion is doing basicallly parseInt

//  const  weight = parseInt(document.querySelector('#weight').value);

//  const results = document.querySelector('#results') //so dont need to do parseInt bcz this is just an element.


// if(height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = 'please give a valid height ${he ight}'
// }else if (weight === '' || weight < 0 || isNaN(weight) ){
//     results.innerHTML = 'please give a valid weight'
// }else{
//    const bmi = ( weighht /((height*height)/1000)).toFixed(2)
//    //show the result
//    results.innerHTML =  `<span>${bmi}</span>`
// }

// })

//based on range another massegge showing task 



const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
