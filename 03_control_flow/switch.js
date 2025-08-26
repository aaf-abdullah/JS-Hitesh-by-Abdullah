

//BASIC SYNNTEX

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('february');
        break;
        
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
        
    default: 
            console.log('defoult case match');
        break;
}

const month2 = 'february' //if string data types comes then this will be the process.

switch (month) {
    case "jan":
        console.log('january');
        break;
    case 'feb':
        console.log('february');
        break;
        
    case 'march':
        console.log('march');
        break;
    case 'april':
        console.log('april');
        break;
        
    default: 
            console.log('defoult case match');
        break;
}


//so in switch case when the value will be match,thereafter all code are executed after the match code,except defoult..so that why break method is important to stop executing code. 





// node 03_control_flow/switch.js