//Task 1
const NAME_ARR = ["Dani", "Jacob", "Yuval", "David", "Sunny"];
// NAME_ARR.forEach((element) =>{
//     console.log(element);
// });

// //Task 2
const AGE_ARR = [10 , 27 , 35, 8, 5, 45, 69, 9, 2, 90];
// AGE_ARR.forEach((element) =>{
//     if(element > 25){
//         console.log(element);
//     }
// })

// //Task 3
const LAST_NAME_ARR = ["Gluskin", "Bengaev", "Fittousi", "AlAluf", "Hazan"];
const UPPERCASE_LNAME_ARR = [];
// LAST_NAME_ARR.forEach((element) =>{
//     UPPERCASE_LNAME_ARR.push(element.toUpperCase());
// })
// console.log(UPPERCASE_LNAME_ARR);

//Task 4
for(const name of NAME_ARR){
    console.log(name);
}

//Task 5
for(const age of AGE_ARR){
    if(age > 25){
        console.log(age);
    }
}

//Task 6
for(const lName of LAST_NAME_ARR){
    UPPERCASE_LNAME_ARR.push(lName.toUpperCase());
}
console.log(UPPERCASE_LNAME_ARR);