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
document.body.innerHTML += `
<button id="start">Start</button>
<button id="stop">Stop</button>
<div id="task1" style="width: 30vw; background-color: red; height:10vh"></div>
`
var intervalId;
var counter = 10;
var task1 = document.getElementById("task1");
function getBigger(){
    task1.style.height = `${++counter}vh`;
}
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function(){
    intervalId = setInterval(getBigger,50);
})
var stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
})
document.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        clearInterval(intervalId);
    }
})