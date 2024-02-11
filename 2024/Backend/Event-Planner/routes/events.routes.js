const { Router } = require("express");
const { Event } = require("../models/event.model")
const router = Router();


router.get("/", async (req, res) =>{
    try {
        const events = await Event.find({});
        res.send(events);
    } catch (error) {
        res.status(400).send("Error");
    }
});

router.post("/", async (req, res) =>{
    const body = req.body;
    try {
        const newEvent = new Event(body);
        await newEvent.save();
        res.send({message: "Event added succesfully", data: body});
    } catch (error) {
        res.status(400).send("Error");
    }
})

router.patch("/:id", (req, res)=>{
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

router.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    try {
        await Event.findByIdAndDelete(id)
    } catch (error) {
        res.status(400).send("Error");
    }
})

module.exports = router;