
const user = { //current context inside the curley bracis
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//so 'this' method is reffering the current context














//  node 02_basics/04_Arraow.js