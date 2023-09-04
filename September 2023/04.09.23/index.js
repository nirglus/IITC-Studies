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

//Task 3
document.body.innerHTML += `
<h3>This is h3</h3>`;
document.getElementsByTagName("h3")[0].addEventListener("mouseover", function(){
    document.getElementsByTagName("h3")[0].style.color = "purple";
})

//Task 4
document.body.innerHTML += `
<button id="myBtn">Button</button>
<p id="myPara">Hover me to make button wider</p>`;
document.getElementById("myPara").addEventListener("mouseover", function(){
    document.getElementById("myBtn").style = "width: 600px";
})