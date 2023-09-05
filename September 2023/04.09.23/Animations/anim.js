// var intervalId = setInterval(moveRight,10);
// var counter = 0;
// function moveRight(){
//     box.style.left = `${++counter}px`
//     if(counter==150){
//         clearInterval(intervalId);
//         counter = 0;
//         intervalId = setInterval(moveDown,10);
//     }
// }
// function moveDown(){
//     box.style.top = `${++counter}px`;
//     if(counter==150){
//         clearInterval(intervalId);
//         intervalId = setInterval(moveLeft,10);
//     }
// }
// function moveLeft(){
//     box.style.left = `${--counter}px`;
//     if(counter==0){
//         clearInterval(intervalId);
//         intervalId = setInterval(moveUp,10);
//         counter = 150;
//     }
// }
// function moveUp(){
//     box.style.top = `${--counter}px`;
//     if(counter==0){
//         clearInterval(intervalId);
//         intervalId = setInterval(moveRight,10);
//     }
// }

//Task 1
// document.body.innerHTML += `
// <button id="start">Start</button>
// <button id="stop">Stop</button>
// <div id="task1" style="width: 30vw; background-color: red; height:10vh"></div>
// `
// var intervalId;
// var counter = 10;
// var task1 = document.getElementById("task1");
// function getBigger(){
//     task1.style.height = `${++counter}vh`;
// }
// var startBtn = document.getElementById("start");
// startBtn.addEventListener("click", function(){
//     intervalId = setInterval(getBigger,50);
// })
// var stopBtn = document.getElementById("stop");
// stopBtn.addEventListener("click", function(){
//     clearInterval(intervalId);
// })
// document.addEventListener("keydown", function(event){
//     if(event.key == "Enter"){
//         clearInterval(intervalId);
//     }
// })

// //Task 5
// document.body.innerHTML += `
// <div id="task5" style="width: 10vw; background-color: yellow; height:10vh"></div>`
// function randomNum(){
//     return Math.floor(Math.random()*256);
// }

// function randomColor(){
//     document.getElementById("task5").style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`
// }

// var intervalId;
// var intervalActive = false;
// var taskDiv = document.getElementById("task5");
// taskDiv.addEventListener("click", function(){
//     if(intervalActive){
//         clearInterval(intervalId);
//     }else{
//         intervalId = setInterval(randomColor, 500);
//     }
//     intervalActive = !intervalActive;
// });

// //Task 6
// document.body.innerHTML += `
// <input type="number" id="width" placeholder="Enter width" onchange="setSize()">
// <input type="number" id="height" placeholder="Enter height" onchange="setSize()">
// <div id="task6" style="background-color: black;"></div>
// `;
// var task6 = document.getElementById("task6");
// var counter = 0
// var intervalId = setInterval(setSize, 1000);
// function setSize(){
//     var width = document.getElementById("width").value;
//     var height = document.getElementById("height").value;
//     if(counter < width || counter < height){
//         task6.style.width = `${++counter}vw`;
//         task6.style.height = `${counter}vh`;
//     }
// }
// document.addEventListener("keydown", function(event){
//     if(event.code == "Space"){
//         clearInterval(intervalId);
//     }
// })


//Task 7
document.body.innerHTML += `    
<input type="color" id="color1" onchange="printLines()">
<input type="color" id="color2" onchange="printLines()">
<input type="color" id="color3" onchange="printLines()">
<input type="color" id="color4" onchange="printLines()">
<input type="color" id="color5" onchange="printLines()">
<input type="text" id="userTxt" onchange="printLines()">
<button id="startBtn">Print</button>
<button id="stopBtn">Stop</button>
<div id="output"></div>`

var intervalId;
function printLines(){
    var colors = [
        document.getElementById("color1").value,
        document.getElementById("color2").value,
        document.getElementById("color3").value,
        document.getElementById("color4").value,
        document.getElementById("color5").value
    ]

    var userText = document.getElementById("userTxt").value;
    var randomNum = Math.floor(Math.random()*5);
    document.getElementById("output").innerHTML += `
    <p style="color:${colors[randomNum]}">${userText}</p>`
}
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function(){
    intervalId = setInterval(printLines, 500);
})

var stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
})

document.addEventListener("keydown", function(event){
    if(event.key == "Shift"){
        clearInterval(intervalId);
    }
})

