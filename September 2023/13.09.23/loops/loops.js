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

// //Task 9
// const DOG_ARR = [
//     {
//         name: "Archi",
//         age: 2,
//         breed: "Mixed"
//     },
//     {
//         name: "Rexsov",
//         age: 5,
//         breed: "Pitbul"
//     },
//     {
//         name: "Milka",
//         age: 1,
//         breed: "Husky"
//     }
// ]
// for(const dogElem of DOG_ARR){
//     console.log(dogElem);
// }
// for(const dogElem of DOG_ARR){
//     if(DOG_ARR.indexOf(dogElem) == 1){
//         console.log(dogElem);
//     }
// }
// document.body.innerHTML += `<div id="main_div"></div>`;
// for(const dogElem of DOG_ARR){
//     main_div.innerHTML += `<div id="dog_obj${DOG_ARR.indexOf(dogElem)}"></div>`
//     for(const dogElemKey in dogElem){
//         document.getElementById(`dog_obj${DOG_ARR.indexOf(dogElem)}`).innerHTML +=
//         `<h3>${dogElemKey}:<small>${dogElem[dogElemKey]}</small></h3>`
//     }
// }

// //Task 10
// const STUDENTS_ARR = [
//     {
//         fullName: "John Johnson",
//         birthDate: "1998-02-04",
//         email: "johny@gmail.com",
//         passedTest: false
//     },
//     {
//         fullName: "Jeremy Clarkson",
//         birthDate: "1999-03-06",
//         email: "jermes@gmail.com",
//         passedTest: true
//     },
//     {
//         fullName: "Moshe Moshaev",
//         birthDate: "1998-11-22",
//         email: "moshka@gmail.com",
//         passedTest: false
//     },
//     {
//         fullName: "Sunny Manson",
//         birthDate: "1997-07-09",
//         email: "sunson@gmail.com",
//         passedTest: true
//     }
// ];
// function logAllObj(){
//     for(const studentObj of STUDENTS_ARR){
//         console.log(studentObj);
//     }
// }
// function logThirdObj(){
//     for(const studentObj of STUDENTS_ARR){
//         if(STUDENTS_ARR.indexOf(studentObj) == 2){
//             console.log(studentObj);
//         }
//     }
// }
// function printEachObj(){
//     document.body.innerHTML += `<div id="main_div"></div>`;
//     for(const studentObj of STUDENTS_ARR){
//         main_div.innerHTML += `<div id="student_${STUDENTS_ARR.indexOf(studentObj)}"></div>`;
//         for(const studentKey in studentObj){
//             document.getElementById(`student_${STUDENTS_ARR.indexOf(studentObj)}`).innerHTML +=
//             `<h3>${studentKey} : ${studentObj[studentKey]}</h3>`;
//         }
//     }
// }
// printEachObj();

// //Task 11

// function createOffice(){
//     const OFFICE_ARR = [];
//     let counter = 0;
//     document.body.innerHTML += `
//     <form id="officeForm">
//     <input type="text" id="division" placeholder="Division:">
//     <input type="number" id="employeesNum" placeholder="Employees:">
//     <input type="text" id="managerName" placeholder="Manager name:">
//     <button id="submitBtn">Submit</button>
//     </form>`;
//     submitBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         if(counter < 3){
//             const OFFICE_OBJ = {
//                 officeDivision: `${division.value}`,
//                 employees: `${employeesNum.value}`,
//                 manager: `${managerName.value}`
//             }
//             OFFICE_ARR.push(OFFICE_OBJ);
//             counter++;
//             console.log(OFFICE_ARR);
//             division.value = "";
//             employeesNum.value = "";
//             managerName.value = "";
//         }if(counter == 3){
//             submitBtn.disabled = true;
//             printOfficeObj(OFFICE_ARR);
//         }
//     });

// }
// function printOfficeObj(OFFICE_ARR){
//     document.body.innerHTML += `<div id="main_div"></div>`;
//     for(const officeObj of OFFICE_ARR){
//         const div = document.createElement('div')
//         div.setAttribute("id",`office_${OFFICE_ARR.indexOf(officeObj)}`);
//         main_div.appendChild(div); 

//         for(const officeKey in officeObj){
//             document.getElementById(`office_${OFFICE_ARR.indexOf(officeObj)}`).innerHTML +=
//             `<h3>${officeKey} : ${officeObj[officeKey]}</h3>`;
//         }
//         console.log(document.getElementById("main_div"));
//     }
//  }
//  createOffice();

// //Task 12
// document.body.innerHTML += `<button id="firstBtn">Click me</button>
// <div id="myForm"></div>`;
// firstBtn.addEventListener("click", () => {
//     myForm.innerHTML += `
//     <form id="routeForm">
//     <input type="text" id="depart" placeholder="Departure:">
//     <input type="text" id="dest" placeholder="Destination:">
//     <input type="number" id="time" placeholder="Route time:">
//     <button id="submitBtn">Submit</button>
//     </form>`;
//     submitBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         const ROUTE_OBJ = {
//             departure: `${depart.value}`, 
//             destination: `${dest.value}`,
//             time: `${time.value}`
//             }
//             document.body.innerHTML += `<div id="objDiv"></div>`;
//             for(routeKey in ROUTE_OBJ){
//                 objDiv.innerHTML += `<h3>${routeKey} : ${ROUTE_OBJ[routeKey]}</h3>`;
//             }
//     });
// });

// //Task 13
// const CITIES_ARR = [
//     {
//         name: "Lod",
//         residents: 81660,
//         emblem: `<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Coat_of_arms_of_Lod.svg/1200px-Coat_of_arms_of_Lod.svg.png">`,
//         quarantine: false
//     },
//     {
//         name: "Ramla",
//         residents: 77798,
//         emblem: `<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_Arms_of_Ramla.svg/1200px-Coat_of_Arms_of_Ramla.svg.png">`,
//         quarantine: false
//     },
//     {
//         name: "Holon",
//         residents: 197464,
//         emblem: `<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Holon.svg/800px-Coat_of_arms_of_Holon.svg.png">`,
//         quarantine: true
//     },
//     {
//         name:"Bat-Yam",
//         residents: 129012,
//         emblem: `<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Bat-Yam.svg/1200px-Coat_of_arms_of_Bat-Yam.svg.png">`,
//         quarantine: true
//     },
//     {
//         name:"Netanya",
//         residents: 203390,
//         emblem: `<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/NetanyaCoa.svg/1200px-NetanyaCoa.svg.png">`,
//         quarantine: false
//     }
// ];
// for(const obj of CITIES_ARR){
//     console.log(obj);
// }
// for(const obj of CITIES_ARR){
//     if(CITIES_ARR.lastIndexOf(obj) == CITIES_ARR.length - 1){
//         console.log(obj);
//     }
// }
// document.body.innerHTML += `<div id="cities"></div>`;
// for(const cityObj of CITIES_ARR){
//     const cityDiv = document.createElement("div");
//     cityDiv.setAttribute("id", `city_${CITIES_ARR.indexOf(cityObj)}`);
//     for(const cityKey in cityObj){
//         cities.appendChild(cityDiv).innerHTML += `<p>${cityKey} : ${cityObj[cityKey]}<p>`
//     }
// }

// document.body.innerHTML += `<button id="openForm">Click me</button>
// <div id="form_div"></div>`;
// openForm.addEventListener("click", () => {
//     form_div.innerHTML += `<form id="newObjectForm">
//     <input type="text" id="cityNameInp" placeholder="City name:">
//     <input type="number" id="residInp" placeholder="Residents:">
//     <input type="text" id="emblemInp" placeholder="City emblem URL:">
//     <label for="quarntInp">Is on quarantine?</label>
//     <input type="radio" id="quarntInp">
//     <button id="submitBtn">Create new city</button>
//     </form>
//     `;
//      submitBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         if(quarntInp.checked){
//             quarntInp.value = true;
//         }else{
//             quarntInp.value = false;
//         }
//         const NEW_CITY = {
//             name: `${cityNameInp.value}`,
//             residents: `${residInp.value}`,
//             emblem: `<img width="100px" src="${emblemInp.value}">`,
//             quarantine: `${quarntInp.value}`
//         }
//         CITIES_ARR.push(NEW_CITY);
//         console.log(CITIES_ARR);
//      })
// })

//Task 14 
const OBJECTSS_ARR = [
    {
        fName: "John",
        lName: "Johnson",
        birthDate: "1998-02-04",
        email: "johny@gmail.com"
    },
    {
        fName: "Jeremy",
        lName: "Clarkson",
        birthDate: "1999-03-06",
        email: "jermes@gmail.com"
    },
    {
        fName: "Moshe",
        lName: "Moshaev",
        birthDate: "1998-11-22",
        email: "moshka@gmail.com"
    },
    {
        fullName: "Sunny",
        lName: "Manson",
        birthDate: "1997-07-09",
        email: "sunson@gmail.com"
    }
];

document.body.innerHTML += `<div id="tableDiv"></div>`;
tableDiv.innerHTML = `    
<table id="myTable">
<thead><tr id="tableTHead"></tr></thead>
<tbody id="t_Body"></tbody>
</table>`

function addKeysToThead(obj){
    for(const key in obj){
        const tHead = document.getElementById("tableTHead");
        tHead.innerHTML += `<th>${key}</th>`
    }
}
function addDataToTable(objectArr){
    const tBody = document.getElementById("t_Body")
    for(const obj of objectArr){
        tBody.innerHTML += `<tr id="object_${objectArr.indexOf(obj)}"</tr>`
        for(const key in obj){
            document.getElementById(`object_${objectArr.indexOf(obj)}`).innerHTML +=
            `<td>${obj[key]}</td>`
        }
    }
}
addKeysToThead(OBJECTSS_ARR[0]);
addDataToTable(OBJECTSS_ARR);