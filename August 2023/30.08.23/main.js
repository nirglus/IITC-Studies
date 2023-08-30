//Task 1 
var myDiv = document.getElementById("div");
myDiv.innerHTML = "<h1>first dom app</h1>";
console.log(myDiv.innerText);

//Task 2
var emptyPar = document.getElementById("par");
emptyPar.innerText = "my dom app";

//Task 3
var heading1 = document.getElementById("firstHeading");
var heading2 = document.getElementById("secondHeading");
var heading3 = document.getElementById("thirdHeading");
var heading4 = document.getElementById("forthHeading");
console.log(heading1, heading2, heading3, heading4);

//Task 4 + 5 + 6
var myHeadingsElem = document.getElementsByClassName("myHeadings");
for(var i = 0; i < myHeadingsElem.length; i++){
    console.log(myHeadingsElem[i].innerText);
}
console.log(myHeadingsElem[1]);
console.log(myHeadingsElem[2].innerText);

