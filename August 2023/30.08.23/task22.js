// document.getElementById("container").innerHTML += "<ol id = 'countriesList'></ol>";
// var country;
// for(var i = 0; i < 5; i++){
//     country = prompt("Enter country name:");
//     document.getElementById("countriesList").innerHTML += "<li>"+ country + "</li>";
// }

//Task 23
// var teacher = {};
// teacher.fullName = prompt("Enter full name:");
// teacher.email = prompt("Enter email:");
// teacher.profession = prompt("Enter profession:");

// document.getElementById("container").innerHTML += 
// `<table>
// <thead><th>firstName</th><th>email</th><th>profession</th></thead>
// <tbody><tr><td>${teacher.fullName}</td><td>${teacher.email}</td><td>${teacher.profession}</td></tr></tbody>
// </table>`;


//Task 24
var companiesArr = [
    {compName:"Mobileye", city:"Tel-Aviv", employees:2645, offerJob: true},
    {compName:"Astra", city:"Ramat-Gan", employees:856, offerJob: false},
    {compName:"Pagani", city:"Modena", employees:458, offerJob: true}
];
for(let i = 0; i < companiesArr.length; i++){
    document.getElementById("myTBody").innerHTML +=
    `<tr><td>${companiesArr[i].compName}</td><td>${companiesArr[i].city}</td><td>${companiesArr[i].employees}</td><td>${companiesArr[i].offerJob}</td></tr>`
}

//Task 25
document.getElementById("myTable").style.padding = "30px";
document.getElementById("myTable").style.borderRadius = "20px";
document.getElementById("myTable").style.backgroundColor = "grey";


var tdsArr = document.getElementsByTagName("td");
for(let i = 0; i < tdsArr.length; i++){
    // tdsArr[i].style.border = "2px solid blue";
    tdsArr[i].style.backgroundColor = "aqua";
    tdsArr[i].style.padding = "40px";
}

var thsArr = document.getElementsByTagName("th");
for(let i = 0; i < thsArr.length; i++){
    thsArr[i].style.padding = "20px";
    // thsArr[i].style.border = "2px solid blue";
    thsArr[i].style.backgroundColor = "lime";
}
