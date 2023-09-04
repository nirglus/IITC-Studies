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

//Task 3
document.body.innerHTML += `
<button onclick="cancelPrint()">Cancel</button>`;
function printLove(){
    document.body.innerHTML += `I love timers`
}
var cancel = setInterval(printLove, 5000);
function cancelPrint(){
    clearTimeout(cancel);
}