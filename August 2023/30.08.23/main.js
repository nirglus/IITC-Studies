//Task 1 
var myDiv = document.getElementById("div");
myDiv.innerHTML = "<h1>first dom app</h1>";
console.log(myDiv.innerText);

//Task 2
var emptyPar = document.getElementById("par");
emptyPar.innerText = "my dom app";

//Task 3
var myHeadings = document.getElementsByClassName("headings");
heading1.innerText = "Hi";
var heading2 = document.getElementById("secondHeading");
heading2.innerText = "My";
var heading3 = document.getElementById("thirdHeading");
heading3.innerText = "Name is";
var heading4 = document.getElementById("forthHeading");
heading4.innerText = "What";
console.log(heading1, heading2, heading3, heading4);
