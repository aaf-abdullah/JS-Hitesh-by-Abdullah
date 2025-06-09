//object.create its a constructor method obj declaration,and inside this create sigleton. details in next.

//we talking about object literals

const mysym = Symbol('key1')
const JsUser = {
    name: 'faasle',
    'full name': "faasle mamur",
    [mysym]: 'mykey1', //if we add [] then this reperenst a seymbol
    age: 22 ,
    location: 'ctg',
    email: 'abd@gmail.com',
    isLoggedIn: true,
    lastLoginDays: ['Satruday', 'Friday']
}

// console.log(JsUser.email);// this type of access should avoid
// console.log(JsUser['email']); //instead of this
// console.log(JsUser['full name']);
// console.log(JsUser[mysym]);// undefined !! and this keyword access only this method there is none other than/

JsUser.email = 'asu@chatgpt.com' //this will change the obj email.
JsUser["full name"] = 'taimur shajak'
//Object.freeze(JsUser)//so after this keyword obj are freeze before what kind of information hold before its declaration.


// console.log(JsUser['email']);
// console.log(JsUser['full name']);

JsUser.greeting = function(){
    console.log('hello is user motherfather');
}

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting); //undefined
// console.log(JsUser.greetingTwo);//undefined

// console.log(JsUser.greeting); //[Function (anonymous)] when freeze is comment then this ans shown
// console.log(JsUser.greetingTwo);

console.log(JsUser.greeting()); // hello is user motherfather
console.log(JsUser.greetingTwo()); //hello JS User, faasle



//================PART-2======================





// node 02_basics/02_objects
