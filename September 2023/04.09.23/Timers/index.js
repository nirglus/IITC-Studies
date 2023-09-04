//Task 1
function printName(){
    document.body.innerHTML =`
    <h1>Nir</h1>`
}
setTimeout(printName, 7000);

//Task 2
function printHello(){
    document.body.innerHTML = `
    <h1>Hello</h1>`
}
setTimeout(printHello, 5000);
document.body.innerHTML = `
<h1>Bye</h1>`;

//Task 3
function printTime(){
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.body.innerHTML = `${hours},${min},${sec}`;
}
setTimeout(printTime, 90000);