const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
//console.log(date.toLocaleTimeString()) //this meaning if i refresh the page,the time will be updated.
clock.innerHTML = date.toLocaleTimeString()

}, 1000)


