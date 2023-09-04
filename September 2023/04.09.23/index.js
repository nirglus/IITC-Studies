//Task 1
document.body.innerHTML += `
<h1>Hello world</h1>`
document.getElementsByTagName("h1")[0].addEventListener("mouseover", function(){
    alert("Welcome");
});