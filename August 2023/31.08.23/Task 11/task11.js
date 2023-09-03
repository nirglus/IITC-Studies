function checkAccess(){
    var userName = prompt("Enter your name:");
    var birthDate = prompt("Enter your birth date: (in this format 00/00/1900");
    var birthYear = birthDate.substring(6, birthDate.length);
    console.log(birthYear);
    if(birthYear < 2005){
        document.body.innerHTML += `<h1 id="welcome" onmouseover = "colorChangeHov()">Welcome <span>${userName}</h1>`;
        document.getElementById("welcome").style = "color: blue";
        document.body.innerHTML += `<button id="printNameList" onclick = "overAge()">Press to print</button>`
    }else{
        document.body.innerHTML += `<h1 id="welcome" onmouseover = "colorChangeHov()">YOU ARE NOT ALLOWED TO BE HERE!</h1>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3psOGJheGdveWo0a3NiM3hwaHQ1MGphZGF6aDNmeGZmanZpbGNlYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3Hxy8wKadIdMjRXc9k/giphy.gif">`;
        document.getElementById("welcome").style = "color: red";
        setTimeout(function (){
            document.location.reload();
          }, 3000);
    }
}
checkAccess();


function overAge(){    
    var lName = prompt("Enter last name:");
    var fNamesArr = [];
    document.body.innerHTML += `<ol id="nameList"></ol>`
    for(let i = 0; i < 4; i++){
        var fName = prompt("Enter first name:");
        fNamesArr.push(fName);
        var spanId = `fname-${i}`;
        var fNameDisplay = `<span id="${spanId}">${fName.charAt(0)}</span>${fName.substring(1)}`;
        document.getElementById("nameList").innerHTML += `<li>
        ${fNameDisplay} ${lName}</li>`;
        if(fName.charAt(0) == lName.charAt(0)){
            document.getElementById(spanId).style.color = "red";
        }
    }
}


function colorChangeHov(){
    document.getElementById("welcome").style = `color: green`;
}
