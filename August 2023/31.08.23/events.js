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