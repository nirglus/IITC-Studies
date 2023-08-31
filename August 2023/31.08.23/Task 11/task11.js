var userName = prompt("Enter your name:");
var birthDate = prompt("Enter your birth date: (in this format 00/00/1900");
var birthYear = birthDate.substring(5, birthDate.length);
if(birthYear < 2005){
    document.body.innerHTML += `<h1 id="welcome">Welcome <span>${userName}</h1>`;
    document.getElementById("welcome").style = "color: blue";
}else{
    document.body.innerHTML += `<h1 id="welcome">YOU ARE NOT ALLOWED TO BE HERE!</h1>
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3psOGJheGdveWo0a3NiM3hwaHQ1MGphZGF6aDNmeGZmanZpbGNlYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3Hxy8wKadIdMjRXc9k/giphy.gif">`;
    document.getElementById("welcome").style = "color: red";
}