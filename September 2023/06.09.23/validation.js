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

//Task 2
function whosBigger(){
    if(num1.value > num2.value){
        return true;
    }else{
        num1.style.border = `solid 2px red`;
        document.body.innerHTML += `<span style="color:red">Number 1 is smaller than Number 2</span>`
        return false;
    }
}

// //Task 3
// function validateStr(){
//     if(txt1.value == txt2.value){
//         return true;
//     }else{
//         return false;
//     }
// }

// //Task 4
// function validateLength(){
//     if(txt1.value.length == txt2.value.length){
//         return true;
//     }else {
//         return false;
//     }
// }

// //Task 5
// function validateFirstChar(){
//     if(txt1.value[0] == txt2.value[0]){
//         return true;
//     }else{
//         return false;
//     }
// }

//Task 6