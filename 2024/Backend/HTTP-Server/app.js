const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const books = [];
let tasks = [
    {
        id: 1,
        title: "Wash car",
        completed: false
    },
    {
        id: 2,
        title: "Go grocery shopping",
        completed: true
    },
    {
        id: 3,
        title: "Call bank",
        completed: false
    }
];

app.get("/api/v1/tasks", (req , res) =>{
    res.send(tasks);
})

app.get("/api/v1/books", (req, res) =>{
    res.send(books);
})

// POST Method
app.post("/api/v1/books" , (req, res) =>{
    const body = req.body;
    books.push(body);
    console.log({ message: "Book added succesfully", data: body});
})

app.post("/api/v1/tasks", (req, res) =>{
    const body = req.body;
    tasks.push(body);
    console.log({ message: "Task added succesfully", data: body});
})

// DELETE Method
app.delete("/api/v1/tasks/:id", (req, res) =>{
    const taskID = parseInt(req.params.id);
    tasks = tasks.filter(task => taskID !== task.id);
    res.send(`Task with ID ${taskID} has been deleted.`);
})

//PATCH Method
app.patch("/api/v1/tasks/:id", (req, res) =>{
    const taskID = parseInt(req.params.id);
    const updatedTaskData = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskID);
    // If task with the given ID is found, update its properties
    if (taskIndex !== -1) {
        // Update task properties with the provided data
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTaskData };
        res.send(`Task with ID ${taskID} has been updated.`);
    } else {
        res.status(404).send(`Task with ID ${taskID} not found.`);
    }
});

//PUT Method
app.patch("/api/v1/tasks/:id", (req, res) =>{
    const taskID = parseInt(req.params.id);
    const updatedTaskData = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskID);

    if(taskIndex !== -1){
        tasks[taskIndex] = { id: taskID, ...updatedTaskData };
        res.send(`Task with ID ${taskID} has been updated.`);
    } else{
        res.status(404).send(`Task with ID ${taskID} not found.`);
    }
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})

