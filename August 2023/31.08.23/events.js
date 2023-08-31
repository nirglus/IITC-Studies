//Task 1 
function alertOnHover(){
    alert("Welcome!");
}

//Task 2
function logTimeOnHover(){
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    console.log(`${hours}:${min}:${sec}`);
}

//Task 3
function colorChange(){
    document.getElementsByTagName("h3")[0].style.color = "purple";
}

//Task 4
function changeWidth(){
    document.getElementById("myBtn").style.width = "300px";
}

//Task 5
function changeText(){
    document.getElementById("task5").innerHTML = `Look I've got changed!`;
}

//Task 6
function printNameFromInput(){
    var userName = document.getElementById("task6").value;
    document.body.innerHTML += `<h1>${userName}</h1>`;
}