// //Task 1
// function printName(){
//     document.body.innerHTML +=`
//     <h1>Nir</h1>`
// }
// setTimeout(printName, 7000);

// //Task 2
// function printHello(){
//     document.body.innerHTML += `
//     <h1>Hello</h1>`
// }
// setTimeout(printHello, 5000);
// document.body.innerHTML += `
// <h1>Bye</h1>`;

// //Task 3
// function printTime(){
//     var date = new Date();
//     var hours = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     document.body.innerHTML += `${hours},${min},${sec}`;
// }
// setTimeout(printTime, 90000);

// //Task 4
// document.body.innerHTML += `
// <button onclick="cancelPrint()">Cancel</button>`;
// function printLove(){
//     document.body.innerHTML += `I love timers`
// }
// var cancel = setTimeout(printLove, 10000);
// function cancelPrint(){
//     clearTimeout(cancel);
// }

// //Task 5
// document.body.innerHTML = `
// <h1 style="color:blue">Task 5</h1>`;
// function changeColor(){
//     document.body.innerHTML = `
//     <h1 style="color:red">Task 5</h1>`;
// }
// setTimeout(changeColor, 3000);

// // ------------------ setInterval Tasks -----------------

// //Task 1
// function printTimer(){
//     document.body.innerHTML += `timer`;
// }
// setInterval(printTimer, 4000);

// //Task 2
// var counter = 0;
// function printCounter(){
//     document.body.innerHTML = `${counter++}`;
// }
// setInterval(printCounter, 6000);

// //Task 3
// document.body.innerHTML += `
// <button onclick="cancelPrint()">Cancel</button>`;
// function printLove(){
//     document.body.innerHTML += `I love timers`
// }
// var cancel = setInterval(printLove, 5000);
// function cancelPrint(){
//     clearTimeout(cancel);
// }

// //Task 4
// function printTime(){
//     var date = new Date();
//     var hours = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     document.body.innerHTML = `${hours}:${min}:${sec}`;
// }
// setInterval(printTime, 1000);

//Task 5
document.body.innerHTML = `<input id="min" type="number" placeholder="Enter minutes">
<button id="start">Start/Stop</button>
<div id="showTime"></div>`
var intervalId;
var counter = 59;
function createTimer(){
    var userMin = document.getElementById("min").value;
    document.getElementById("showTime").innerHTML = `${--userMin}:${counter--}`
    if(counter == 0){
        counter = 60;
        userMin--;
    } else if(userMin == 0 && counter == 0){
        clearInterval(intervalId);
        document.getElementById("showTime").innerHTML `TIME IS OVER!`
    }
}
var isBtnActive = false;
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function(){
    if(isBtnActive){
        clearInterval(intervalId);
    }else{
        intervalId = setInterval(createTimer, 1000);
    }
    isBtnActive = !isBtnActive;
})

// //Task 6
// document.body.innerHTML = `
// <input type="time" id="userTime" placeholder="When you want to get up?">
// <button id="startBtn">Set/Stop</button>
// <div id="timer"></div>`
// var intervalId;
// function countTime(){
//     var myDate = new Date();
//     var hoursNow = myDate.getHours();
//     var minNow = myDate.getMinutes();
//     var userTime = document.getElementById("userTime").value;
//     var splitHourMin = userTime.split(":");
//     var userHours = parseInt(splitHourMin[0]);
//     var userMin = parseInt(splitHourMin[1]);
//     var hourCounter = userHours - hoursNow;
//     var minCounter = userMin - minNow;
//     document.getElementById("timer").innerHTML  = `
//     ${hourCounter}:${minCounter} left till ring`
//     if(userMin == 0){
//         --hourCounter;
//         userMin = 59;
//     }else if(hourCounter == 0 && userMin == 0){
//         document.getElementById("timer").innerHTML  = `
//         TIME IS OVER`
//     }else if(minCounter < 10 && minCounter > 0){
//         document.getElementById("timer").innerHTML  = `
//         ${hourCounter}:0${minCounter} left till ring`
//     }else{
//         --minCounter;
//     }
// }
// var isBtnActive = false;
// var startBtn = document.getElementById("startBtn");
// startBtn.addEventListener("click", function(){
//     if(isBtnActive){
//         clearInterval(intervalId);
//     }else{
//         intervalId = setInterval(countTime, 1000)
//     }
//     isBtnActive = !isBtnActive;
// })

// //Task 7
// document.body.innerHTML += `<button id="btn">Start/Stop</button>
// <button id="reset">Reset</button>
// <div id="task7"></div>`
// var intervalId;
// var counter = 0;
// function printTime(){
//     document.getElementById("task7").innerHTML = `
//     <p> You are in the website for ${++counter} seconds.`
// }
// var isBtnActive = false;
// var startBtn = document.getElementById("btn");
// startBtn.addEventListener("click", function(){
//     if(isBtnActive){
//         clearInterval(intervalId);
//     }else{
//         intervalId = setInterval(printTime, 1000)
//     }
//     isBtnActive = !isBtnActive;
// })
// var resetBtn = document.getElementById("reset");
// resetBtn.addEventListener("click", function(){
//     counter = 0;
//     document.getElementById("task7").innerHTML = `
//     <p> You are in the website for ${counter} seconds.`
// })

// //Task 8
// var names = [
//     "Nir",
//     "Lirone",
//     "Uriel",
//     "Ron",
//     "Noa",
//     "Maya",
//     "Itzhak",
//     "Hila",
//     "Ohad",
//     "Nitzan",
//     "Ramin",
//     "Yuval"
// ]
// document.body.innerHTML += `
// <button id="start">Print names</button>
// <button id="stop">Stop</button>
// <div id="namesDiv"></div>`

// var intervalId;
// function printNames(){
//     var randomNum = Math.floor(Math.random() * names.length);
//     document.getElementById("namesDiv").innerHTML += 
//     `<p>${names[randomNum]}</p>`
// }
// var startBtn = document.getElementById("start");
// var stopBtn = document.getElementById("stop");
// startBtn.addEventListener("click", function(){
//     intervalId = setInterval(printNames, 4000);
// })

// stopBtn.addEventListener("click", function(){
//     clearInterval(intervalId);
// })


