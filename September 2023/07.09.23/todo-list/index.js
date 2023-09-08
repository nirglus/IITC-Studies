document.body.innerHTML = `<div id="loginDiv">
<h1>Please log in</h1>
<input type="text" id="userName" placeholder="Enter username:">
<input type="date" id="userAge" placeholder="Date of birth:">
<button id="loginBtn">Login</button>
</div>`

function addTask(){
    formDiv.innerHTML = `
    <form id="addTaskForm">
    <label for="taskName">Task name:</label>
    <input type="text" id="taskName">
    <label for="whatToDo">What's needed to be done?</label>
    <input type="text" id="whatToDo">
    <label for="tillWhen">What's the deadline?</label>
    <input type="date" id="tillWhen">
    <label for="isDone">Is the task done?</label>
    <input type="checkbox" id="isDone">
    </form>` 
}

function welcomeMsg(){
    if(new Date().getFullYear() - +userAge.value.substr(0,4) < 18){
        document.body.style.background = `linear-gradient(#ED7B7B, #836096)`
    }else if(new Date().getFullYear() - +userAge.value.substr(0,4) > 50){
        document.body.style.background = `linear-gradient(#ADC4CE, #96B6C5)`
    }
    console.log(userAge.value , userAge.value.substr(0,4));
    document.body.innerHTML = `<h1>Welcome back <span id="nameSpan">${userName.value}!</span></h1>
    <button id="newTaskBtn"> + Add new task</button>
    <div id="formDiv"></div>`
    newTaskBtn.addEventListener("click", addTask);
}
loginBtn.addEventListener("click", welcomeMsg);

// function stylePerTime(){
//     if(new Date().getHours() < 17 && new Date().getHours > 6){

//     }
// }
