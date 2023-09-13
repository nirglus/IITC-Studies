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

//Task 2
function checkName(){
    let userName = prompt("Enter a name");
    switch (userName) {
        case "jacob":
            document.body.innerHTML = `${userName}`;   
            return;
        case "Nathan":
            document.body.innerHTML = `${userName.toUpperCase()}`;   
            return;
        case "DALYA":
            document.body.innerHTML = `${userName.toLowerCase()}`;   
            return;
        default: 
            document.body.innerHTML = "There isn't a proper name";
    }
}
checkName();

//Task 3
function calculate(){
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    let param = prompt("Enter a paramater (+ - * /)");
    switch (param) {
        case "+":
            console.log(num1 + num2);
            return;
        case "-":
            console.log(num2 - num1);
            return;
        case "/":
            console.log(num2 / num1);
            return;
        case "*":
            console.log(num1 * num2);
            return;    
        default:
    }
}
