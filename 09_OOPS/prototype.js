
//PROTOTYPES
//JS defoult beheviour is prototypal beheviour,protypal inheritance..



let myName = 'abdullah     '
console.log(myName.length); //counting including space
console.log(myName.trim().length) //triming the space | but inefficient bczz of the everytime write to triming the space


console.log(myName.trueLength);//undefined







let myHeros = ['thor', 'batman']
let heroPower = {
    thor: 'hammer',
    batman: 'justice',
    getBatmanPower: function(){
        console.log(`batman power is ${this.batman}`);
        
    }
}


//property adding access all array string...
Object.prototype.abdullah = function(){
    console.log(`abdullah is present in all object`)
}


heroPower.abdullah() //abdullah is present in all object.
myHeros.abdullah()//abdullah is present in all object.

Array.prototype.heyAbdullah = function(){
    console.log(`is array hey abdullah is available in obj`);
    
}
myHeros.heyAbdullah() // have
//heroPower.heyAbdullah() //doesnt access the heyabdullah property





//==========INHERITENCE=========

const user = {
    name: 'chai',
    email: 'chai.gamil.com'
}

const teacher = {

    makeVideo = true
}
const teachingAssistant = {
    isAvailable: false
}

const TAsupport = {
    makeAssignmen: 'js Assignemnt',
    fullTime: true,
    __proto__: teachingAssistant
}


teacher.__proto__ = user// accessing the accesing another obj property like here teacher is accessing user is all property // this is kinda outdated


//modern sytex
Object.setPrototypeOf( teachingAssistant, teacher)




let anotherUserName= 'chaiAurCode      '
String.prototype.trueLength= function(){
    console.log(`${this}`)//chaiAurCOde  
    console.log(`true length is : ${this.trim().length}`)    

}

anotherUserName.trueLength()
'hitesh'.trueLength()
"siuuu".trueLength()



