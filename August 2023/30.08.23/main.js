// //Task 1 
// var myDiv = document.getElementById("div");
// myDiv.innerHTML = "<h1>first dom app</h1>";
// console.log(myDiv.innerText);

// //Task 2
// var emptyPar = document.getElementById("par");
// emptyPar.innerText = "my dom app";

// //Task 3
// var heading1 = document.getElementById("firstHeading");
// var heading2 = document.getElementById("secondHeading");
// var heading3 = document.getElementById("thirdHeading");
// var heading4 = document.getElementById("forthHeading");
// console.log(heading1, heading2, heading3, heading4);

// //Task 4 + 5 + 6
// var myHeadingsElem = document.getElementsByClassName("myHeadings");
// for(var i = 0; i < myHeadingsElem.length; i++){
//     console.log(myHeadingsElem[i].innerText);
// }
// console.log(myHeadingsElem[1]);
// console.log(myHeadingsElem[2].innerText);


// //Task 7
// var myStrongsElem = document.getElementsByTagName("strong");
// console.log(myStrongsElem);

// //Task 8
// function printName(){
//     var userName = prompt("Enter your name:");
//     document.write("<h2>"+ userName + "</h2>");
// }
// printName();

// //Task 9
// function printColorPerNum(){
//     var userColor = prompt("Enter a color:");
//     var userNum = +prompt("Enter a number:");
//     for(var i = 0; i < userNum; i++){
//         document.writeln("<span>" + userColor + "</span>");
//     }
// }
// printColorPerNum();

// //Task 10
// function createUserTag(){
//     var userTag = prompt("Enter a tag name:");
//     var userText = prompt("Enter text:");
//     document.writeln("<"+ userTag +">" + userText + "</" + userTag + ">");
// }
// createUserTag();

// //Task 11
// function createUserInput(){
//     var userInput = prompt("Enter an input type:");
//     document.writeln("<input type="+ userInput +">");
// }
// createUserInput();

// //Task 12
// function changeTextOfClasses(userClass, userText){
//     var classesElem = document.getElementsByClassName(userClass);
//     for(var i = 0; i < classesElem.length; i++){
//         classesElem[i].innerText = userText; 
//     }
// }
// changeTextOfClasses("myHeadings", "Some text");

// //Task 13
// var pArr = document.getElementsByTagName("p");
// for(let i = 0; i < pArr.length; i++){
//     pArr[i].innerHTML = `<span>Some text</span>`;
// }

// //Task 14
// function printUserStats(){
//     var fName = prompt("Enter first name:");
//     var lName = prompt("Enter last name:");
//     var age = +prompt("Enter age:");
//     if(age > 18){
//         document.body.innerHTML = `First name: ${fName}, Last name: ${lName}, Age: ${age}, <input type="text">`;
//     }else{
//         document.body.innerHTML = `First name: ${fName}, Last name: ${lName}, Age: ${age}`;
//     }
// }
// printUserStats();

//Task 15
// function printMovieObj(){
//     var movName = prompt("Movie name:");
//     var viewsNum = +prompt("Number of views:");
//     var movYear = +prompt("Year:");
//     var movImg = prompt("Image URL:");
//     document.body.innerHTML = `<b>Movie name: </b>${movName}<br>
//     <b>Number of views: </b>${viewsNum}<br>
//     <b>Year: </b>${movYear}<br>
//     <b>Image: <img src="${movImg}">`
// }
// printMovieObj();

// //Task 16
// var workerObj = {}
// workerObj.fName = prompt("Enter first name:");
// workerObj.lName = prompt("Enter last name:");
// workerObj.email = prompt("Enter email:");
// workerObj.division = prompt("Enter division:");
    
// document.body.innerHTML += `<h1>New Employee</h1>
//     <p><b>First name:</b> ${workerObj.fName}</p>
//     <p><b>Last name:</b> ${workerObj.lName}</p>
//     <p><b>Email:</b> ${workerObj.email}</p>
//     <p><b>Division:</b> ${workerObj.division}</p>`;


//Task 17
// function buildingObj(){
//     var objNum = +prompt("Enter number of builidngs:");
//     var building = {};
//     for(let i = 0; i < objNum; i++){
//         building.constractor = prompt("Enter constractor's name:");
//         building.company = prompt("Enter company name:");
//         building.floors = +prompt("Floors number:");
//         building.apartments = +prompt("Apartments per floor:");
//         document.body.innerHTML +=  `<h1>Building ${i + 1}</h1>
//         <p><b>Constractor's name:</b> ${building.constractor}</p>
//         <p><b>Company name:</b> ${building.company}</p>
//         <p><b>Total floors:</b> ${building.floors}</p>
//         <p><b>Apartments per floor:</b> ${building.apartments }</p>`;
    
//     }
// }
// buildingObj();

// //Task 18

// function createStoreObj(){
//     var objNum = +prompt("Enter number of stores:");
//     var store = {};
//     var storeArr = [];
//     for(let i = 0; i < objNum; i++){
//         store.name = prompt("Enter store's name:");
//         store.address = prompt("Enter store's address:");
//         store.divisions = +prompt("Divisions number:");
//         store.employees = +prompt("Employees amount:");
//         if(store.employees > 10){
            // document.body.innerHTML +=  `<h1>Store ${i + 1}</h1>
            // <p><b>Store's name:</b> ${store.name}</p>
            // <p><b>Store's address:</b> ${store.address}</p>
            // <p><b>Total divisions:</b> ${store.divisions}</p>
            // <p><b>Total employees:</b> ${store.employees}</p>`;
//             storeArr.push(store);
//         }
//     }
//     countPrintedObj(storeArr);
// }
// createStoreObj();


// //Task 19
// function countPrintedObj(storeArr){
//     var printed = storeArr.length;
//     console.log(`Amount of stores printed: ${printed}`);
// }

// //Task 20
// function printContactName(){
//     var objNum = +prompt("Enter object amount: ");
//     var contact = {};
//     for(let i = 0; i < objNum; i++){
//         contact.fullName = prompt("Full name:");
//         contact.company = prompt("Company:");
//         contact.phone = prompt("Phone number:");
//         contact.email = prompt("Email:");
//         document.getElementById("personList").innerHTML += `<li>${contact.fullName}`;
//     }
// }
// printContactName();

// //Task 21
// function createDocObject(){
//     var objNum = +prompt("Enter object amount: ");
//     var doctor = {};
//     for(let i = 0; i < objNum; i++){
//         doctor.fullName = prompt("Full name:");
//         doctor.prof = prompt("Profession:");
//         doctor.phone = prompt("Phone number:");
//         doctor.available = confirm("Is the doctor available?");
//         doctor.email = prompt("Email: ");
//         document.getElementsByTagName("tbody")[0].innerHTML += `<tr><td>${doctor.fullName}</td><td>${doctor.prof}</td>
//         <td>${doctor.phone}</td><td>${doctor.available}</td><td>${doctor.email}</td></tr>`;
//     }
// }
// createDocObject();

// //Task 22
// function list4Colors (){
//     var color;
//     document.body.innerHTML += `<ol></ol>`;
//     for(let i = 0; i < 4; i++){
//         color = prompt("Enter a color:");
//         document.getElementsByTagName("ol")[0].innerHTML += `<li>${color}</li>`;
//     }
// }
// list4Colors();

// //Task 23
// function studentObj(){
//     var student = {
//         fullName: prompt("Full name:"),
//         email: prompt("Email:"),
//         grade: +prompt("Grade:")
//     };
//     document.body.innerHTML += `<table>
//     <thead><th>Full Name</th><th>Email</th><th>Grade</th></thead>
//     <tbody><tr><td>${student.fullName}</td><td>${student.email}</td><td>${student.grade}</td></tr></tbody>
//     </table>`;
// }
// studentObj();

// //Task 24
// var carsArr = [
//     {carName:"McLaren", color:"Black", forSale:false},
//     {carName:"Lotus", color:"Yellow", forSale:true},
//     {carName:"Ferrari", color:"Red", forSale:false}
// ];
// for(let i = 0; i < carsArr.length; i++){
//     document.getElementById("carsTBody").innerHTML +=
//     `<tr><td>${carsArr[i].carName}</td><td>${carsArr[i].color}</td><td>${carsArr[i].forSale}</td></tr>`;
// }

// //Task 25
// var tdsArr = document.getElementsByTagName("td");
// for(let i = 0; i < tdsArr.length; i++){
//     tdsArr[i].style.padding = "50px";
//     tdsArr[i].style.backgroundColor = "yellow";
// }

// var thsArr = document.getElementsByTagName("th");
// for(let i = 0; i < thsArr.length; i++){
//     thsArr[i].style.padding = "20px";
//     thsArr[i].style.backgroundColor = "orange";
// }

// //Task 25.1
// var manager = {
//     fName: "Moti",
//     lName: "Luchim",
//     age: "55",
//     salary: "$45,000"
// }
// document.body.innerHTML +=  `<h1>Manager</h1>
// <p><b>First name:</b> ${manager.fName}</p>
// <p><b>Last name:</b> ${manager.lName}</p>
// <p><b>Age:</b> ${manager.age}</p>
// <p><b>Salary:</b> ${manager.salary}</p>`;


// //Task 26
// var employee = {
//     fullName: "Java Scriptson",
//     birthYear: "1995",
//     email: "javascriptson@js.com",
//     address: "6th Java St. , Programston, USA"
// }
// document.body.innerHTML +=  `<h1>Employee</h1>
// <p><b>Full name:</b> ${employee.fullName}</p>
// <p><b>Year of birth:</b> ${employee.birthYear}</p>
// <p><b>Email:</b> ${employee.email}</p>
// <p><b>Address:</b> ${employee.address}</p>`;

// //Task 27
// var fruit = {
//     fName: "Peach",
//     color: "Orange",
//     fType: "Peachy"
// }
// document.body.innerHTML +=  `<h1>Fruit</h1>
// <p><b>Fruit name:</b> ${fruit.fName}</p>
// <p><b>Color:</b> ${fruit.color}</p>
// <p><b>Type:</b> ${fruit.fType}</p>`;


// //Task 28
// var classObj = {
//     classNum: 4,
//     students: 5,
//     studsNames: ["Freddie Mercury","Elvis Presly", "Michael Jackson", "Brain Johnson", "Bon Scott"]
// }
// for(let i = 0; i < classObj.studsNames.length; i++){
//     document.body.innerHTML += `<p>${classObj.studsNames[i]}</p>`
// }

// //Task 29
// var kidGarden ={
//     nannyName: "Shoshana Shosh",
//     kidsNum: 10,
//     kidsNames: ["Dan Danson", "Dave Daveson", "James Jameson", "Phill Graves", "John Price", 
//     "John MacTavish", "Simon Riley", "Carl Johnson", "Niko Bellic", "Claude Speed"]
// }
// for(let i = 0; i < kidGarden.kidsNames.length; i++){
//     document.body.innerHTML += `<p>${kidGarden.kidsNames[i]}</p>`
// }
// var userKey = prompt("Enter a key:");
// var userValue = kidGarden[userKey];
// document.body.innerHTML += `<p><b>${userKey}:</b> ${userValue}</p>`;

// //Task 30
// var cityObj = {}
// cityObj.cityName = prompt("City name:");
// cityObj.population = +prompt("Population:");
// cityObj.emblem = prompt("Emblem image link:");

// document.body.innerHTML += `<h1>City</h1>
// <p><b>City Name:</b>${cityObj.cityName}</p>
// <p><b>Population:</b>${cityObj.population}</p>
// <p><b>Emblem:</b><img src="${cityObj.emblem}">`;

// //Task 31
// var userObj = {};
// userObj.fName = prompt("First name:");
// userObj.lName = prompt("Last name:");
// userObj.pImg = prompt("Profile photo URL:");
// userObj.email = prompt("Email:");
// userObj.password = prompt("Password:");

// document.body.innerHTML += `<div id="fName">${userObj.fName}</div>
// <div id="lName">${userObj.lName}</div>
// <div id="userImg"><img src="${userObj.pImg}"></div>
// <div id="email">${userObj.email}</div>
// <div id="pass">${userObj.password}</div>`;

// //Task 32
// var carsObj = {};
// document.body.innerHTML += `<table>
// <thead><th>Car Company</th><th>Color</th><th>CC</th><th>Year</th></thead>
// <tbody id="myTBody"></tbody></table>`;
// for(let i = 0; i < 4; i++){
//     carsObj.cName = prompt("Car name:");
//     carsObj.color = prompt("Car color:");
//     carsObj.cc = prompt("Engine CC:");
//     carsObj.year = +prompt("Model Year:");
//     document.getElementById("myTBody").innerHTML += `<tr><td>${carsObj.cName}</td>
//     <td>${carsObj.color}</td><td>${carsObj.cc}</td><td>${carsObj.year}</td></tr>`
// }

//Task 33
// function createCatObj(){
//     var catObj = {};
//     for(let i = 0; i < 2; i++){
//         catObj.name = prompt("Cat's name:");
//         catObj.year = +prompt("Year of birth:");
//         catObj.breed = prompt("Breed:");
//         catObj.weight = +prompt("Cat's weight:");
//         document.body.innerHTML += `<h1>${catObj.name}, ${catObj.year}, ${catObj.breed}, ${catObj.weight}</h1>`;
//     }
// }
// createCatObj();

// //Task 34
// function createDogObj(){
//     var dogObj ={};
//     var userNum = +prompt("How many objects you want?");
//     for(let i = 0; i < userNum; i++){
//         dogObj.name = prompt("Dog's name:");
//         dogObj.age = +prompt("Dog's age:");
//         dogObj.breed = prompt("Breed:");
//         dogObj.owner = prompt("Owner's name:");
//         document.body.innerHTML += `<p>${dogObj.name}, ${dogObj.age}, ${dogObj.breed}, ${dogObj.owner}</p>`;
//     }
// }
// createDogObj();

// //Task 35
// function createBugsObj(){
//     var bugsObj = {};
//     var userNum = +prompt("How many objects you want?");
//     for(let i = 0; i < userNum; i++){
//         bugsObj.name = prompt("Bug's name:");
//         bugsObj.labName = prompt("Bug's labaratory name:");
//         bugsObj.legNum = +prompt("Leg number:");
//         bugsObj.wings = confirm("It has wings?");
//         if(bugsObj.wings){
//             document.body.innerHTML += `<h3>${bugsObj.name}, ${bugsObj.labName}, 
//             ${bugsObj.legNum }, ${bugsObj.wings}</h3>`;
//         }
//     }
// }
// createBugsObj();

// //Task 36
// function createKidsObj(){
//     var kidsObj = {};
//     var userNum = +prompt("How many objects you want?");
//     for(let i = 0; i < userNum; i++){
//         kidsObj.fName = prompt("Kid's full name:");
//         kidsObj.age = +prompt("Kid's age:");
//         kidsObj.kidGarden = confirm("Is the kid in Kidden Garden?");
//         if(kidsObj.age > 4){
//             document.body.innerHTML += `<p>${kidsObj.fName}, ${kidsObj.age }, ${kidsObj.kidGarden}`;
//         }
//     }
// }
// createKidsObj();


// //Task 37
// function createCompObj(objNum){
//     var compObj = {};
//     var compObjArr = [];
//     for(let i = 0; i < objNum; i++){
//         compObj.company = prompt("Company:");
//         compObj.model = prompt("Model:");
//         compObj.weight = +prompt("Weight:");
//         compObj.inStock = confirm("Is this model in stock?");
//         compObjArr.push(compObj);
//         if(compObj[i].inStock && compObj[i].weight > 2){
//             document.body.innerHTML += `<p>${compObj[i].company}, ${compObj[i].model},
//              ${compObj[i].weight}, ${compObj[i].inStock}</p>`
//         }
//     }
// }
// createCompObj(2);

// //Task 38
// function createTeacherObj(objNum){
//     for(let i = 0; i < objNum; i++){
//         var teacherObj = {
//             fullName: prompt("Teacher full name:"),
//             hourPay: +prompt("Salary per hour:"),
//             email: prompt("Email:"),
//             birthYear: +prompt("Year of birth:")
//         };
//         if(teacherObj.hourPay > 100 || teacherObj.birthYear < 1990){
//             document.body.innerHTML += `<span>${teacherObj.fullName},
//              ${teacherObj.hourPay}, ${teacherObj.email}, ${teacherObj.birthYear}</span>`
//         }
//     }
// }
// createTeacherObj(2);

// //Task 39
// function furnitObj(objNum){
//     for(let i = 0; i < objNum; i++){
//         var furnitObj = {
//             furName: prompt("Furniture name:"),
//             furBrand: prompt("Brand:"),
//             storesArr: [
//                 prompt("Stores to buy:"),
//                 prompt("Stores to buy:"),
//                 prompt("Stores to buy:")
//             ],
//             furPrice: +prompt("Price:")
//         };
//         document.body.innerHTML += `<h1>${furnitObj.furName}</h1>`
//         for(let i = 0; i < furnitObj.storesArr.length; i++ ){
//             document.body.innerHTML += `<p>${furnitObj.storesArr[i]}</p>`
//         }
//     }
// }
// furnitObj(2);

// //Task 40
// function apartObj(objNum){
//     for(let i = 0; i < objNum; i++){
//         var apartmentObj = {
//             address: prompt("Apartment address:"),
//             rentPrice: +prompt("Rent price:"),
//             fullPrice: +prompt("Full price"),
//             buyersArr: [
//                 prompt("Pot. buyer name:"),
//                 prompt("Pot. buyer name:"),
//                 prompt("Pot. buyer name:"),
//             ],
//             middleMan: confirm("Is there a middleman?")
//         };
//         if(apartmentObj.middleMan == false){
//             document.body.innerHTML += `<p>${apartmentObj.address}</p>`;
//             for(let i = 0; i < apartmentObj.buyersArr.length; i++ ){
//                 document.body.innerHTML += `<p>${apartmentObj.buyersArr[i]}</p>`
//             }
//         }
//     }
// }
// apartObj(2);

// //Task 41
// function countriesObj(){
//     var userNum = +prompt("How many objects you want?");
//     for (let i = 0; i < userNum; i++){
//         var countryObj ={
//             cName: prompt("Country name:"),
//             citizen: +prompt("Citizen:"),
//             citiesArr: [
//                 prompt("City name:"),
//                 prompt("City name:"),
//                 prompt("City name:")
//             ],
//             habad: confirm("Is there Beit Habad in this country?")
//         };
//         if(countryObj.habad){
//             document.body.innerHTML += `<h1>${countryObj.cName}</h1>`;
//             for(let i = 0; i < countryObj.citiesArr.length; i++ ){
//                 document.body.innerHTML += `<p>${countryObj.citiesArr[i]}</p>`
//             }
//         }
//     }
// }
// countriesObj();

// //Task 42
// function creatMovObj(){
//     var userNum = +prompt("How many objects you want?");
//     for(let i = 0; i < userNum; i++){
//         var movObj = {
//             movName: prompt("Movie name:"),
//             views: +prompt("Views:"),
//             year: +prompt("Year:"),
//             image: prompt("Image URL:")
//         }
//         document.body.innerHTML += `<div class="movie">
//             <h1>${movObj.movName}</h1>
//             <p><b>Views: </b>${movObj.views}</p>
//             <p><b>Year: </b>${movObj.year}</p>
//             <img src="${movObj.image}" width="300">
//         </div>`
//     }
// }
// creatMovObj();

//Task 43
function creatUserObj(){
    var userArr = [];
    for(let i = 0; i < 2; i++){
        var userObj = {
            userName: prompt("User name:"),
            email: prompt("Email:"),
            password: prompt("Password:"),
            image: prompt("Image URL:")
        }
        userArr.push(userObj);
    }
    if(userArr[0].email == userArr[1].email){
        document.body.innerHTML += `The emails are the same`
    }else{
        for(let i = 0; i < 2; i++){
            document.body.innerHTML += `<div class="user">
                <h1>${userArr[i].userName}</h1>
                <p><b>Email: </b>${userArr[i].email}</p>
                <p><b>Password: </b>${userArr[i].password}</p>
                <img src="${userArr[i].image}" width="300">
            </div>`
        }
    }
}
creatUserObj();