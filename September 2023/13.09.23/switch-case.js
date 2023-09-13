function checkInput(userNum){
    let userNum = +prompt("Enter a number");
    switch (userNum) {
        case 3:
            console.log("Shalom");
            return;
        case 5:
            console.log("Bye bye");
            return;
        case 7: 
        console.log("Thank you");
            return;        
        default:
            console.log("There isn't a proper message");
            return;
    }
}
checkInput(userNum);