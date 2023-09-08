document.body.innerHTML = `<div id="loginDiv">
<h1>Please log in</h1>
<label for="userName">Username:</label>
<input type="text" id="userName" placeholder="Enter username">
<label for="userAge">Date of birth:</label>
<input type="date" id="userAge" placeholder="Date of birth">
<button id="loginBtn">Login</button>
</div>`

function addTask(){
    formDiv.innerHTML = `
    <form id="addTaskForm" onsubmit="return addRowToTable()">
    <label for="taskName">Task name:</label>
    <input type="text" id="taskName">
    <label for="whatToDo">What's needed to be done?</label>
    <input type="text" id="whatToDo">
    <label for="tillWhen">What's the deadline?</label>
    <input type="date" id="tillWhen">
    <label for="isDone">Is the task done?</label>
    <input type="checkbox" id="isDone">
    <button id="submitTask">Add</button>
    </form>` 
}
var taskNum = 0
function addRowToTable(){
    if(isDone.checked){
        isDone.value = "Yes";
    }else{
        isDone.value = "No";
    }
    todoBody.innerHTML += `
    <tr id="row${taskNum}">
    <td>${taskName.value}</td>
    <td>${whatToDo.value}</td>
    <td>${tillWhen.value}</td>
    <td>${isDone.value}</td>
    </tr>`
    taskNum++;
    deleteRow();
    return false;
}
function deleteRow(){
    if(taskNum > 0){
        var rows = document.getElementsByTagName("tr");
        for(let i = 0; i <= taskNum; i++){
            rows[i].addEventListener("click", function(){
                rows[i].remove();
            })
        }
    }
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
    <div id="formDiv"></div>
    <div id="tableDiv">
    <h1 id="tableH1">My ToDo List</h1>
    <table id="todoTable">
    <thead><th>Task Name</th><th>What to do?</th><th>Till when?</th><th>Is it done?</th></thead>
    <tbody id="todoBody"></tbody>
    </table>
    </div>`
    newTaskBtn.addEventListener("click", addTask);
}
loginBtn.addEventListener("click", welcomeMsg);


// function stylePerTime(){
//     if(new Date().getHours() < 17 && new Date().getHours > 6){

//     }
// }
