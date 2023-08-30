// document.getElementById("container").innerHTML += "<ol id = 'countriesList'></ol>";
// var country;
// for(var i = 0; i < 5; i++){
//     country = prompt("Enter country name:");
//     document.getElementById("countriesList").innerHTML += "<li>"+ country + "</li>";
// }

var teacher = {};
teacher.fullName = prompt("Enter full name:");
teacher.email = prompt("Enter email:");
teacher.profession = prompt("Enter profession:");

document.getElementById("container").innerHTML += 
`<table>
<thead><th>firstName</th><th>email</th><th>profession</th></thead>
<tbody><tr><td>${teacher.fullName}</td><td>${teacher.email}</td><td>${teacher.profession}</td></tr></tbody>
</table>`