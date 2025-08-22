//object.create its a constructor method obj declaration,and inside this create sigleton. details in next.

//we talking about object literals


//HOW TO DECLARE OBJECT LITERALS.

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




// HOW T ACCES THE OBJECT

// console.log(JsUser.email);// this type of access should avoid
// console.log(JsUser['email']); //instead of this
// console.log(JsUser['full name']);
// console.log(JsUser[mysym]);// undefined !! and this keyword access only this method there is none other than/






//HOW TO ADD NEW KEYS AND HOW TO REPLACE THE VALUES,AND ALSO FREZING THE OBJECT.

JsUser.email = 'asu@chatgpt.com' //this will change the obj email.
JsUser["full name"] = 'taimur shajak'
//Object.freeze(JsUser)//so after this keyword obj are freeze before what kind of information hold before its declaration.


// console.log(JsUser['email']);
// console.log(JsUser['full name']);





//HOW TO ADD FUNCTION IN OBJECT.

JsUser.greeting = function(){
    console.log('hello Js user motherfather');
}

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
}

// console.log(JsUser.greeting); //undefined
// console.log(JsUser.greetingTwo);//undefined

// console.log(JsUser.greeting); //[Function (anonymous)] when freeze is comment then this ans shown
// console.log(JsUser.greetingTwo);

// console.log(JsUser.greeting()); // hello is user motherfather
// console.log(JsUser.greetingTwo()); //hello JS User, faasle






//================PART-2======================





//HOW TO DECLARE A OBJECT IN CONSTRUCTOR SINGLETON.


//const tinderUser = new Object() // this is a singleton object
const tinderUser = {} //non single ton object ,where there is key and values define after the declaration,like ,in down we write

tinderUser.id = "124abx"
tinderUser.name = 'binod'
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // if i have to know the keys of an object,then i use this method,bcz of so manny array we need to specify the object name.so it output data types is the array(where i can use loop).

// console.log(Object.values(tinderUser)); //its also same as the upperr one.

// console.log(Object.entries(tinderUser)); // this keywords is access the every  keys and values in one array and hold all key values at another  array.LIKE NASTED ARRAY,where 1st is key the 2nd one is values.(NOT USES THAT MUCH)

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //if i have to check the keys of the obj is available or not,then we use this method,becouse we are gonna loop through the obj array,if the property we looping is not available THEN the website will be crash probably.







//DECLARE OBJECT INSIDE THE OBJECT(NASTED OBJ) AND ACCESS IT

const regulerUser = {
    email: 'binod@google.com',
    full_name: {
        userfullname: {
            firstname: 'binod',
            lastname: 'bruhh'
        }
    }
}
//console.log(regulerUser.full_name.userfullname.lastname);

//console.log(regulerUser.full_name?.userfullname.lastname);
//many times we dont know the keys is available in the object or not ,if we doubt it existence,then we use a question mark insted of use loop (LIKE if else) to save the time(the process is called optional chaining)







//HOW TO COMBINE OBJECT IN ANOTHER OBJECT.

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

const obj4 = { obj1,  obj2} //this is doing NASTED object LIKE object inside the object

//console.log(obj4);


const obj5 = Object.assign ( obj1, obj2, obj3)
const obj5 = Object.assign ({}, obj1, obj2, obj3)//to marged the object in one object,and if we use {} empty obj, it actually work like target and marged all as a sources.

//console.log(obj5);




const obj6 = {...obj1, ...obj2, ...obj3} //this is spread operator.this doing same things what assign can do,marge the whole object, and this is the modern way

//console.log(obj6);






//===IF THE OBJECT COME FROM THE DATABSE*(ITS ACTUALLY COME IN ARRAY OF OBJECT LIKE THIS)
const newUsers = [
    {
        id: 001,
        email: 'bonita@laisla.com'
    },
    {
        id: 002,
        email: 'bonita2@gmail.com'
    },
    {
        id: 003,
        email: 'bonita3@goggle.com'
    },
]
console.log(newUsers[001].email);//to access the exact data .








//======DE-STRUCTURING OF OBJECT

const mycourse = {
    coursename: 'js hindi by hitesh',
    price: '999',
    courseInstructor: 'hitesh bruh'
}
mycourse.courseInstructor//GENERAL way to accescing the obj values


const {courseInstructor} = mycourse
const {courseInstructor: instructor} = mycourse//so this is basically doing when we need to print values 3 4 or more times,then general way to print is unprofessional,instead of this we use this and also we naming the keys is anytingh we want,this is calld de structure


//console.log(courseInstructor);
//console.log(instructor);






//WHERE DE STRUCTURING APPLY ON (REACTJs)

const navbar = (props.company) => {
}
navbar(company = 'abdullah')
//SO every time we dont write props.company,props.name or props.something else,instead of this we write down below

const navbar = ({company}) => {

}
navbar(company = 'abdullah')







/*======API concept of OBJ

API Is some values come from the beckend,and how i wrote those values.
in earlier it comes xml form to complex
now values comes in JSON form,

so JSON(JS OBJ NOTATION) is look like object,where this doesnt have any name and there keys and values name written in string form.HERE THIS IS



{
    'name': 'mathmatics'
    'coursename': 'math fundamental'
    'price': 'free'
}


//==SOMETIMES API WE GET AN ARRAY FORMAT
[
    {},
    {},
    {},
    {}
]

//RANDOMUSERME.COM(GET API) GOOO AND JSON FORMATOR(THAT API DATA STRUCTURE THE FORMAT)



for furher info you definately check out to the browser.
*/// node 02_basics/02_objects
