// const titleInput = document.querySelector("#title");
// const dueDate = document.querySelector("#dueDate");
// const addBtn = document.querySelector("#addBtn");
// const storedNotes = localStorage.getItem("notes");
// const todosArr = JSON.parse(storedNotes) || [];

// function displayNotes(){
//     const todoItem = todosArr.map((item) =>{
//         return `<div>
//         <h2>${item.title}</h2>
//         <h3>${item.date}</h3>
//         </div>`
//     }).join(" ");
//     document.querySelector("#todoDisp").innerHTML = todoItem;
// }

// function saveToStorage(){
//     localStorage.setItem("notes", JSON.stringify(todosArr));
// }
// displayNotes();
// addBtn.addEventListener("click", () =>{
//     const todoObj = {
//         title: titleInput.value,
//         date: dueDate.value
//     }
//     todosArr.push(todoObj);
//     saveToStorage();
//     displayNotes();
//     titleInput.value = "";
//     dueDate.value = "";
// });


const titleInput = document.querySelector("#title");
const dueDate = document.querySelector("#dueDate");
const addBtn = document.querySelector("#addBtn");
const listContainer = document.querySelector("#todoDisp");
const jsonTodos = localStorage.getItem("todos");
// console.log(typeof jsonTodos);
const todos = JSON.parse(jsonTodos) || [];
// render after page load
for (let i = 0; i < todos.length; i++) {
    listContainer.innerHTML += createTodoCard(todos[i]);
};
function createTodoCard(todo) {
    return `<div>
        <h1> ${todo.title} </h1>
        <h1> ${todo.date} </h1>
        </div>`;
}
addBtn.addEventListener("click", () => {
    const todo = {
        title: titleInput.value,
        date: dueDate.value
    }
    todos.push(todo);
    listContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
        listContainer.innerHTML += createTodoCard(todos[i]);
    };
    localStorage.setItem(`todos`, JSON.stringify(todos));
});
