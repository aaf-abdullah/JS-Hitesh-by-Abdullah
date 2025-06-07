//string is actually this ( '' or "")
//there is two types of string declaration.

const name = 'mizuan simur' //string declaration 1.
const repositoryCount = 44
//console.log(typeof name)

// console.log(name + repositoryCount + "value");
//this types of written is outdated,you write it this types of code bit this is not a readable code

// console.log(`Hello my name is ${name} and my reposatory count is ${repositoryCount}`); 
//so this the modorn way to write code



const gameName = new String('adil rahman') //string declaration 2. 
// // and one thing should notice on this declaration string is s should be capital S.

// console.log(gameName[0]) // to access the 0th position,1th or 2th or many more have on this string
// console.log(gameName.__proto__); // to object
// console.log(gameName.length); //how many long this word 
// console.log(gameName.toUpperCase()) //to small letter to capital letter
// console.log(gameName.charAt(7))
// console.log(gameName.indexOf("t"))
// console.log(gameName.indexOf("r"))
// //so in every string we gonna do this thigs,what we gonna do in up.also many have in 'browser' check if you are interested.

//*/
const aNewString = gameName.substring(0, 8)// so this is actually means or indicate that 0th postion string to nth postion string access.
// console.log(aNewString);

const anotherString = name.slice(0, 10)
// console.log(anotherString);

const aNewStringOne = "   welcome to the future  "
// console.log(aNewStringOne);
// console.log(aNewStringOne.trim()); 
//two is no output chage but trim function is trim unutual space given by the userr.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20choudhary', '-bruh'))
//so this is basically replace some of the portion of the url and replace another things.

console.log(url.includes('sundar'));// this method find that, is the sundar keyword is available in url?.if not than false if yes then true.
console.log(name.split('i')); //this keyword is basically  converted to array based on the condition (in given).



//==============for practise==========go to the browser.


//node 01_basics/05_strings.js
