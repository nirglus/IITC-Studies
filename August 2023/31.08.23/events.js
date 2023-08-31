// //Task 1 
// function alertOnHover(){
//     alert("Welcome!");
// }

// //Task 2
// function logTimeOnHover(){
//     var date = new Date();
//     var hours = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     console.log(`${hours}:${min}:${sec}`);
// }

// //Task 3
// function colorChange(){
//     document.getElementsByTagName("h3")[0].style.color = "purple";
// }

// //Task 4
// function changeWidth(){
//     document.getElementById("myBtn").style.width = "300px";
// }

// //Task 5
// function changeText(){
//     document.getElementById("task5").innerHTML = `Look I've got changed!`;
// }

// //Task 6
// function printNameFromInput(){
//     var userName = document.getElementById("task6").value;
//     document.body.innerHTML += `<h1>${userName}</h1>`;
// }

// //Task 7
// function changeBgPerTime(){
//     var myDate = new Date();
//     if(myDate.getHours() < 12){
//         document.body.style = "background-color: yellow";
//         document.body.innerHTML += "<h2>Good Day</h2>";
//     }else{
//         document.body.style = "background-color: blue";
//         document.body.innerHTML += "<h2>Good Night</h2>";
//     }
// }

// //Task 8
// function setAge(){
//     var age = +prompt("What's your age?");
//     if(age > 18){
//         document.body.innerHTML += `<h1 id="welcome" onmouseover = "colorChangeHov()">Welcome!</h1>`;
//         document.body.style = `background-color: red`;
//     }else{
//         document.body.innerHTML += `<h1 id="welcome" onmouseover = "colorChangeHov()">Welcome!</h1>`;
//         document.body.style = `background-color: blue`;
//     }
// }
// function colorChangeHov(){
//     document.body.style = `background-color: green`;
// }

// //Task 9
// function lotto(){
//     var randomNum = Math.floor(Math.random() * 57);
//     var userNumArr = [];
//     for(let i = 0; i < 5; i++){
//         var userNum = +prompt("Enter a number between 0 to 56:");
//         document.body.innerHTML += `${userNum}`;
//         userNumArr.push(userNum);
//     }
//     for(let i = 0; i < userNumArr.length; i++){
//         if(userNumArr[i] == randomNum){
//             document.body.innerHTML += `<h1>Success!</h1>`;
//             return;
//         }
//     }
//     document.body.innerHTML += `<h1>Uh oh! You lost!</h1>`;
// }

//Task 10
function lotto2(){
    var userNumArr = [];
    var randomNumArr = [];
    var randomNum = Math.floor(Math.random() * 57);
    for(let i = 0; i < 5; i++){
        var userNum = +prompt("Enter a number between 0 to 56:");
        document.body.innerHTML += `<p><b>Number ${i+1}:</b> ${userNum}<p>`;
        userNumArr.push(userNum);
    }
    for(let i = 0; i < 5; i++){
        randomNum = Math.floor(Math.random() * 57);
        document.body.innerHTML += `<p><b>Random Number ${i+1}:</b> ${randomNum}<p>`;
        if(userNumArr[i] == randomNum){
            randomNumArr.push(randomNum);
        }
    }
    if(randomNumArr.length > 0){
        document.body.innerHTML += `<h1>Success!</h1>`;
    }else{
        document.body.innerHTML += `<h1>Uh oh! You lost!</h1>`;
    }
}
