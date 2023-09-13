// //Task 1
// const NAME_ARR = ["Dani", "Jacob", "Yuval", "David", "Sunny"];
// // NAME_ARR.forEach((element) =>{
// //     console.log(element);
// // });

// // //Task 2
// const AGE_ARR = [10 , 27 , 35, 8, 5, 45, 69, 9, 2, 90];
// // AGE_ARR.forEach((element) =>{
// //     if(element > 25){
// //         console.log(element);
// //     }
// // })

// // //Task 3
// const LAST_NAME_ARR = ["Gluskin", "Bengaev", "Fittousi", "AlAluf", "Hazan"];
// const UPPERCASE_LNAME_ARR = [];
// // LAST_NAME_ARR.forEach((element) =>{
// //     UPPERCASE_LNAME_ARR.push(element.toUpperCase());
// // })
// // console.log(UPPERCASE_LNAME_ARR);

// //Task 4
// for(const name of NAME_ARR){
//     console.log(name);
// }

// //Task 5
// for(const age of AGE_ARR){
//     if(age > 25){
//         console.log(age);
//     }
// }

// //Task 6
// for(const lName of LAST_NAME_ARR){
//     UPPERCASE_LNAME_ARR.push(lName.toUpperCase());
// }
// console.log(UPPERCASE_LNAME_ARR);

// //Task 8
// const HOUSE_OBJ = {
//     street: "Hertzel",
//     city: "Lod",
//     country: "Israel",
//     rooms: "4",
//     isResidents: true 
// }
// console.log(HOUSE_OBJ);
// for(const houseKey in HOUSE_OBJ){
//     console.log(houseKey);
// }
// for(const houseValue in HOUSE_OBJ){
//     document.body.innerHTML += `<p>${HOUSE_OBJ[houseValue]}</p>`;
// }

//Task 9
const DOG_ARR = [
    {
        name: "Archi",
        age: 2,
        breed: "Mixed"
    },
    {
        name: "Rexsov",
        age: 5,
        breed: "Pitbul"
    },
    {
        name: "Milka",
        age: 1,
        breed: "Husky"
    }
]
for(const dogElem of DOG_ARR){
    console.log(dogElem);
}
for(const dogElem of DOG_ARR){
    if(DOG_ARR.indexOf(dogElem) == 1){
        console.log(dogElem);
    }
}
document.body.innerHTML += `<div id="main_div"></div>`;
for(const dogElem of DOG_ARR){
    main_div.innerHTML += `<div id="dog_obj${DOG_ARR.indexOf(dogElem)}"></div>`
    for(const dogElemKey in dogElem){
        document.getElementById(`dog_obj${DOG_ARR.indexOf(dogElem)}`).innerHTML +=
        `<h3>${dogElemKey}:<small>${dogElem[dogElemKey]}</small></h3>`
    }
}