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
document.body.innerHTML += `<div id="task1" style="width:30vw; height:20vh; color=red"></div>`
// var counter = 20;
// var intervalId = setInterval(getBigger,1000);
// var task1 = document.getElementById("task1");
// function getBigger(){
//     task1.style.height = `${++counter}vh`;
// }