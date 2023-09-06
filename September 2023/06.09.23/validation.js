// //Task 1
// function validate(){
//     if(num1.value == num2.value){
//         return true;
//     }else{
//         num1.style.border = `solid 2px red`;
//         num2.style.border = `solid 2px red`;
//         document.body.innerHTML += `<span style="color:red">The numbers are not even</span>`
//         return false;
//     }
// }

// //Task 2
// function whosBigger(){
//     if(num1.value > num2.value){
//         return true;
//     }else{
//         num1.style.border = `solid 2px red`;
//         document.body.innerHTML += `<span style="color:red">Number 1 is smaller than Number 2</span>`
//         return false;
//     }
// }

// //Task 3
// function validateStr(){
//     if(txt1.value == txt2.value){
//         return true;
//     }else{
//         txt1.style.border = `solid 2px red`;
//         txt2.style.border = `solid 2px red`;
//         document.body.innerHTML += `<span style="color:red">The strings are not the same</span>`
//         return false;
//     }
// }

// //Task 4
// function validateLength(){
//     if(txt1.value.length == txt2.value.length){
//         return true;
//     }else {
//         txt1.style.border = `solid 2px red`;
//         txt2.style.border = `solid 2px red`;
//         document.body.innerHTML += `<span style="color:red">The strings are not the same length</span>`
//         return false;
//     }
// }

// //Task 5
// function validateFirstChar(){
//     if(txt1.value[0] == txt2.value[0]){
//         return true;
//     }else{
//         txt1.style.border = `solid 2px red`;
//         txt2.style.border = `solid 2px red`;
//         document.body.innerHTML += `<span style="color:red">The first chars of each string are not the same.</span>`
//         return false;
//     }
// }

// //Task 7
// function validateUsername(){
//     if(userName.value.length < 10){
//         userName.style.border = `solid 2px red`;
//         document.body.innerHTML += `<p style="color:red">The username must be longer than 10 characters</p>`;
//         return false;
//     }
//     return true;
// }
// function validateEmail(){
//     if(userMail.value.lastIndexOf(".com") != userMail.value.length - 4){
//         userMail.style.border = `solid 2px red`;
//         document.body.innerHTML += `<p style="color:red">Email must end with ".com"</p>`;
//         return false;
//     }
//     return true;
// }

// function validateAge(){
//     var currentYear = new Date().getFullYear();
//     var userYear = +userAge.value.substring(0,4);
//     if(currentYear - userYear < 18){
//         userAge.style.border = `solid 2px red`;
//         document.body.innerHTML += `<p style="color:red">Age must be over 18</p>`;
//         return false;
//     }
//     return true;
// }
// function validatePass(){
//     if(userPassword.value != userConfirm.value){
//         userPassword.style.border = `solid 2px red`;
//         userConfirm.style.border = `solid 2px red`;
//         document.body.innerHTML += `<p style="color:red">Password are not the same</p>`;
//         return false;
//     }
//     return true;
// }
// function validateForm(){
//     validateUsername();
//     validateEmail();
//     validateAge();
//     validatePass();
// }

//Another solution
function validate(){
    var isLower10Char = userName.value.length < 10;
    var containCom = userMail.value.lastIndexOf(".com") == userMail.value.length - 4;
    var isOver18 = new Date().getFullYear() - userAge.value.substring(0,4) >= 18;
    var arePassSame = userPassword.value == userConfirm.value;
    if(isLower10Char && containCom && isOver18 && arePassSame){
        return true;
    }else{
        if(!isLower10Char){
           userName.style.border = `dotted 2px red`;
           nameLbl.innerHTML += `<p style="color:red">The username must be shorter than 10 characters</p>`;
        }
        if(!containCom){
            userMail.style.border = `dotted 2px red`;
            mailLbl.innerHTML += `<p style="color:red">Email must end with ".com"</p>`;
        }
        if(!isOver18){
            userAge.style.border = `dotted 2px red`;
            ageLbl.innerHTML += `<p style="color:red">User must be over 18</p>`;
        }
        if(!arePassSame){
            userPassword.style.border = `solid 2px red`;
            userConfirm.style.border = `solid 2px red`;
            passLbl.innerHTML += `<p style="color:red">Password are not the same</p>`;
            confirmLbl.innerHTML += `<p style="color:red">Password are not the same</p>`;
        }
        return false;
    }
}