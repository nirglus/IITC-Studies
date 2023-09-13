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
