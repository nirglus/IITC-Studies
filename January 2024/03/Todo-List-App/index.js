const titleInput = document.querySelector("#title");
const dueDate = document.querySelector("#dueDate");
const addBtn = document.querySelector("#addBtn");
let todosArr = [];

const storedNotes = localStorage.getItem("notes");
if(storedNotes){
    todosArr = JSON.parse(storedNotes);
    displayNotes();
}

function displayNotes(){
    const todoItem = todosArr.map((item) =>{
        return `<div>
        <h2>${item.title}</h2>
        <h3>${item.date}</h3>
        </div>`
    }).join(" ");
    document.querySelector("#todoDisp").innerHTML = todoItem;
}

function saveToStorage(){
    localStorage.setItem("notes", JSON.stringify(todosArr));
}
addBtn.addEventListener("click", () =>{
    const todoObj = {
        title: titleInput.value,
        date: dueDate.value
    }
    todosArr.push(todoObj);
    saveToStorage();
    displayNotes();
    titleInput.value = "";
    dueDate.value = "";
});
