//Task 1
function printColor(){
    var color = document.getElementById("colorPic").value;
    console.log(color);
}

//Task 2
function printType(){
    var userValue = document.getElementById("task2").value;
    document.getElementById("printed").innerText += `${userValue}`;
}

//Task 3
function submitInput(){
    var userVal = document.getElementById("task3").value;
    document.body.innerHTML += `<h1>${userVal}</h1>`
}