//Task 1
const myArr = ["Main","Dom","React","Ajax"];
function sortArr(myArr){
    const sortedArr = myArr.sort();
    console.log(sortedArr);
}
sortArr(myArr);

//Task 2
const numArr = [6,7,4,2,8,9];
function sortNumArr(numArr){
    const sortedArr = numArr.sort((a , b) => a - b);
    console.log(sortedArr);
}
sortNumArr(numArr);

//Task 3
function sortBigToSmall(numArr){
    const sortedArr = numArr.sort((a , b) => b - a);
    console.log(sortedArr);
}
sortBigToSmall(numArr);