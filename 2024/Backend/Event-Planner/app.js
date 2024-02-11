const express = require("express");



const app = express();
app.use(express.json());

let events = [
    {
        id: 1,
        title: "party",
        description: "go to party",
        date: "30-05-2024"
    }
]

app.get("/event-planner/events", (req, res) =>{
    res.send(events);
});

app.post("/event-planner/events", (req, res) =>{
    const body = req.body;
    events.push(body);
    console.log({message: "Event added succesfully", data: body});
})

app.patch("/event-planner/events/:id", (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const event = events.findIndex(event => event.id == id);
    console.log(event);
    if(event != -1){
        events[event] = {...events[id], ...body}
        return res.send(`Event ${id} has been updated`);
    }
    res.send("Not found");
})

app.delete("/event-planner/events/:id", (req, res)=>{
    const id = req.params.id;
    events = events.filter(event => id != event.id);
    res.send(`Event with ID ${id} has been deleted.`);

})

module.exports = { app }