// //Task 1
// function checkInput(userNum){
//     let userNum = +prompt("Enter a number");
//     switch (userNum) {
//         case 3:
//             console.log("Shalom");
//             return;
//         case 5:
//             console.log("Bye bye");
//             return;
//         case 7: 
//         console.log("Thank you");
//             return;        
//         default:
//             console.log("There isn't a proper message");
//     }
// }
// checkInput(userNum);

// //Task 2
// function checkName(){
//     let userName = prompt("Enter a name");
//     switch (userName) {
//         case "jacob":
//             document.body.innerHTML = `${userName}`;   
//             return;
//         case "Nathan":
//             document.body.innerHTML = `${userName.toUpperCase()}`;   
//             return;
//         case "DALYA":
//             document.body.innerHTML = `${userName.toLowerCase()}`;   
//             return;
//         default: 
//             document.body.innerHTML = "There isn't a proper name";
//     }
// }
// checkName();

// //Task 3
// function calculate(){
//     let num1 = +prompt("Enter first number");
//     let num2 = +prompt("Enter second number");
//     let param = prompt("Enter a paramater (+ - * /)");
//     switch (param) {
//         case "+":
//             console.log(num1 + num2);
//             return;
//         case "-":
//             console.log(num2 - num1);
//             return;
//         case "/":
//             console.log(num2 / num1);
//             return;
//         case "*":
//             console.log(num1 * num2);
//             return;    
//         default:
//     }
// }

// //Task 4
// function printText(){
//     let userTxt = prompt("Enter a text");
//     let userColor = prompt("Enter color");
//     let userFontSize = +prompt("Enter font size");
//     document.body.innerHTML += `<p id="printedTxt">${userTxt}</p>`;
//     printedTxt.style.color = `${userColor}`;
//     printedTxt.style.fontSize = `${userFontSize}px`;
// }
// printText();

//Task 5
function printCircle(){
    let userColor = prompt("Enter color");
    let userPos = prompt("Enter a position (left / right / up / bottom/ center)");
    document.body.innerHTML += `<div id="circle" style="border-radius: 50%; background-color:red; width: 300px; height: 300px; position: absolute;"></div>`;
    switch (userPos) {
        case "top":
            circle.style.left = "calc(50% - 150px)";        
            circle.style.backgroundColor = `${userColor}`; 
            return;
        case "bottom":
            circle.style.left = "calc(50% - 150px)";
            circle.style.top = "calc(98% - 300px)";
            circle.style.backgroundColor = `${userColor}`; 
            return;
        case "left":
            circle.style.top = "calc(50% - 150px)";
            circle.style.backgroundColor = `${userColor}`;
            return;
        case "right":
            circle.style.left = "calc(100% - 300px)";
            circle.style.top = "calc(50% - 150px)";
            circle.style.backgroundColor = `${userColor}`;
            return;
        case "center":
            circle.style.left = "calc(50% - 150px)";
            circle.style.top = "calc(50% - 150px)";
            circle.style.backgroundColor = `${userColor}`;
        default:
            break;
    }
}
printCircle();

