// //Task 1
// const myArr = ["Main","Dom","React","Ajax"];
// function sortArr(myArr){
//     const sortedArr = myArr.sort();
//     console.log(sortedArr);
// }
// sortArr(myArr);

// //Task 2
// const numArr = [6,7,4,2,8,9];
// function sortNumArr(numArr){
//     const sortedArr = numArr.sort((a , b) => a - b);
//     console.log(sortedArr);
// }
// sortNumArr(numArr);

// //Task 3
// function sortBigToSmall(numArr){
//     const sortedArr = numArr.sort((a , b) => b - a);
//     console.log(sortedArr);
// }
// sortBigToSmall(numArr);

// //Task 4
// const CLASS_ARR = [];
// let counter = 0;
// document.body.innerHTML += `<input id="nameInput" type="text">
// <button id="nextBtn">Next</button>`
// function inputPush(){
//     nextBtn.addEventListener("click", function(){
//         if(counter < 10){
//             CLASS_ARR.push(nameInput.value);
//             console.log(CLASS_ARR);
//             counter++;
//             nameInput.value = "";
//         }
//         else if(counter >= 10){
//                 sortClass();
//                 return;
//             }
//         }
//     )
// }
// function sortClass(){
//     const sortedClass = CLASS_ARR.sort();
//     console.log(sortedClass);
// }

// inputPush();

//Task 5
function randomArr(){
    const RANDOM_ARR = [];
    for(let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random()*101);
        RANDOM_ARR.push(randomNum);
    }
    console.log(RANDOM_ARR);
    const SORTED_ARR = RANDOM_ARR.sort((a,b) => b - a);
    console.log(SORTED_ARR);
}
randomArr();