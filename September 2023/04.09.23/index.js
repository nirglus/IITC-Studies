//Task 1
document.body.innerHTML += `
<h1>Hello world</h1>`
document.getElementsByTagName("h1")[0].addEventListener("mouseover", function(){
    alert("Welcome");
});

//Task 2
document.body.innerHTML += `
<div id="timeDiv" style = "height: 200px; width: 200px;"></div>`
var date = new Date();
var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var currentTime = document.getElementById("timeDiv");
currentTime.addEventListener("mouseover", function(){
    currentTime.innerHTML = `${hours}:${min}:${sec}`;
});