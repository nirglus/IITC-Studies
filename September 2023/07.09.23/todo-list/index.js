document.body.innerHTML = `<div id="loginDiv">
<h1>Please log in</h1>
<input type="text" id="userName" placeholder="Enter username:">
<input type="date" id="userAge" placeholder="Date of birth:">
<button id="loginBtn">Login</button>
</div>`

loginBtn.addEventListener("click", function(){
    if(new Date().getFullYear() - +userAge.value.substr(0,4) < 18){
        document.body.style.background = `linear-gradient(#ED7B7B, #836096)`
    }else if(new Date().getFullYear() - +userAge.value.substr(0,4) > 50){
        document.body.style.background = `linear-gradient(#ADC4CE, #96B6C5)`
    }
    console.log(userAge.value , userAge.value.substr(0,4));
    document.body.innerHTML = `<h1>Welcome back <span id="nameSpan">${userName.value}!</span></h1>`
})