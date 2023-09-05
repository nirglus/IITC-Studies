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

// //Task 5
// document.body.innerHTML = `<input id="min" type="number" placeholder="Enter minutes"
// onchange="getUserMin(value)">
// <button id="start">Start</button>`
// function getUserMin(userMin){
//     return userMin;
// }
// var counter = 0;
// var userMin = getUserMin(value);
// function createTimer(){
//     counter = 60;
//     document.body.innerHTML = `${userMin}:${--counter}`
//     if(counter == 0){
//         counter = 60;
//         --userMin;
//     } else if(userMin == 0 && counter == 0){
//         document.body.innerHTML = `TIME IS OVER!`
//     }
// }
// var startBtn = document.getElementById("start");
// startBtn.addEventListener("click", function(){
//     setInterval(createTimer, 1000);
// })

//Task 8
var names = [
    "Nir",
    "Lirone",
    "Uriel",
    "Ron",
    "Noa",
    "Maya",
    "Itzhak",
    "Hila",
    "Ohad",
    "Nitzan",
    "Ramin",
    "Yuval"
]
document.body.innerHTML += `
<button id="start">Print names</button>
<button id="stop">Stop</button>
<div id="namesDiv"></div>`

var intervalId;
function printNames(){
    var randomNum = Math.floor(Math.random() * names.length);
    document.getElementById("namesDiv").innerHTML += 
    `<p>${names[randomNum]}</p>`
}
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
startBtn.addEventListener("click", function(){
    intervalId = setInterval(printNames, 4000);
})

stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
})


