
function setUserName(username){
    //complex db calls
    this.username=username
}

function CreateUser(username, email, password){
    setUserName.call(this, username) //this.username=username istead of this i used this
    //and here dont call the function though look like call function but doesnt call the function,that s why we need to some method call to do it 
    this.email=email
    this.password=password

}

const chai = new CreateUser('chai', 'hey@gmail.com')
console.log(chai) //



