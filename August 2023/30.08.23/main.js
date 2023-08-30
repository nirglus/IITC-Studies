// //Task 1 
// var myDiv = document.getElementById("div");
// myDiv.innerHTML = "<h1>first dom app</h1>";
// console.log(myDiv.innerText);

// //Task 2
// var emptyPar = document.getElementById("par");
// emptyPar.innerText = "my dom app";

// //Task 3
// var heading1 = document.getElementById("firstHeading");
// var heading2 = document.getElementById("secondHeading");
// var heading3 = document.getElementById("thirdHeading");
// var heading4 = document.getElementById("forthHeading");
// console.log(heading1, heading2, heading3, heading4);

// //Task 4 + 5 + 6
// var myHeadingsElem = document.getElementsByClassName("myHeadings");
// for(var i = 0; i < myHeadingsElem.length; i++){
//     console.log(myHeadingsElem[i].innerText);
// }
// console.log(myHeadingsElem[1]);
// console.log(myHeadingsElem[2].innerText);


// //Task 7
// var myStrongsElem = document.getElementsByTagName("strong");
// console.log(myStrongsElem);

// //Task 8
// function printName(){
//     var userName = prompt("Enter your name:");
//     document.write("<h2>"+ userName + "</h2>");
// }
// printName();

// //Task 9
// function printColorPerNum(){
//     var userColor = prompt("Enter a color:");
//     var userNum = +prompt("Enter a number:");
//     for(var i = 0; i < userNum; i++){
//         document.writeln("<span>" + userColor + "</span>");
//     }
// }
// printColorPerNum();

// //Task 10
// function createUserTag(){
//     var userTag = prompt("Enter a tag name:");
//     var userText = prompt("Enter text:");
//     document.writeln("<"+ userTag +">" + userText + "</" + userTag + ">");
// }
// createUserTag();

// //Task 11
// function createUserInput(){
//     var userInput = prompt("Enter an input type:");
//     document.writeln("<input type="+ userInput +">");
// }
// createUserInput();

// //Task 12
// function changeTextOfClasses(userClass, userText){
//     var classesElem = document.getElementsByClassName(userClass);
//     for(var i = 0; i < classesElem.length; i++){
//         classesElem[i].innerText = userText; 
//     }
// }
// changeTextOfClasses("myHeadings", "Some text");

// //Task 13
// var pArr = document.getElementsByTagName("p");
// for(let i = 0; i < pArr.length; i++){
//     pArr[i].innerHTML = `<span>Some text</span>`;
// }

// //Task 14
// function printUserStats(){
//     var fName = prompt("Enter first name:");
//     var lName = prompt("Enter last name:");
//     var age = +prompt("Enter age:");
//     if(age > 18){
//         document.body.innerHTML = `First name: ${fName}, Last name: ${lName}, Age: ${age}, <input type="text">`;
//     }else{
//         document.body.innerHTML = `First name: ${fName}, Last name: ${lName}, Age: ${age}`;
//     }
// }
// printUserStats();

//Task 15
// function printMovieObj(){
//     var movName = prompt("Movie name:");
//     var viewsNum = +prompt("Number of views:");
//     var movYear = +prompt("Year:");
//     var movImg = prompt("Image URL:");
//     document.body.innerHTML = `<b>Movie name: </b>${movName}<br>
//     <b>Number of views: </b>${viewsNum}<br>
//     <b>Year: </b>${movYear}<br>
//     <b>Image: <img src="${movImg}">`
// }
// printMovieObj();

// //Task 16
// var workerObj = {}
// workerObj.fName = prompt("Enter first name:");
// workerObj.lName = prompt("Enter last name:");
// workerObj.email = prompt("Enter email:");
// workerObj.division = prompt("Enter division:");
    
// document.body.innerHTML += `<h1>New Employee</h1>
//     <p><b>First name:</b> ${workerObj.fName}</p>
//     <p><b>Last name:</b> ${workerObj.lName}</p>
//     <p><b>Email:</b> ${workerObj.email}</p>
//     <p><b>Division:</b> ${workerObj.division}</p>`;


//Task 17
function buildingObj(){
    var objNum = +prompt("Enter number of builidngs:");
    var building = {};
    for(let i = 0; i < objNum; i++){
        building.constractor = prompt("Enter constractor's name:");
        building.company = prompt("Enter company name:");
        building.floors = +prompt("Floors number:");
        building.apartments = +prompt("Apartments per floor:");
        document.body.innerHTML +=  `<h1>Building ${i + 1}</h1>
        <p><b>Constractor's name:</b> ${building.constractor}</p>
        <p><b>Company name:</b> ${building.company}</p>
        <p><b>Total floors:</b> ${building.floors}</p>
        <p><b>Apartments per floor:</b> ${building.apartments }</p>`;
    
    }
}
buildingObj();11
