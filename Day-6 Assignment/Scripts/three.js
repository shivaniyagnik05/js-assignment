console.log("Three");


var customerName = prompt("Please enter your name");
document.write("Welcome");


const darkmode = document.getElementById('dark');

darkmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
   
}
const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);