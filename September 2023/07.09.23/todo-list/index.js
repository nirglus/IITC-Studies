document.body.innerHTML = `
<input type="text" id="userName" placeholder="Enter username:">
<input type="date" id="userAge" placeholder="Date of birth:">
<button id="loginBtn">Login</button>`

loginBtn.addEventListener("click", function(){
    document.body.innerHTML = `<h1>Welcome back <span id="nameSpan">${userName.value}!</span></h1>`
})