//string is actually this ( '' or "")
//there is two types of string declaration.

const name = 'adil rahman ' //string declaration 1.
const repositoryCount = 44
//console.log(typeof name)

// console.log(name + repositoryCount + "value");
//this types of written is outdated,you write it this types of code bit this is not a readable code

// console.log(`Hello my name is ${name} and my reposatory count is ${repositoryCount}`); 
//so this the modorn way to write code

const gameName = new String('adil rahman') //string declaration 2. 
// and one thing should notice on this declaration string is s should be capital S.
console.log(gameName[0]) // to access the 0th position,1th or 2th or many more have on this string
console.log(gameName.__proto__); // to object
console.log(gameName.length); //how many long this word 
console.log(gameName.toUpperCase()) //to small letter to capital letter
console.log(gameName.charAt(7))
console.log(gameName.indexOf("t"))
console.log(gameName.indexOf("r"))



//node 01_basics/05_strings.js
