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

router.patch("/:id", async (req, res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, body, { new: true});
        res.send({message: "Event updated succesfully", data: updatedEvent});
    } catch (error) {
        res.status(400).send("Error updating event");
    }
});

router.delete("/:id", async(req, res)=>{
    const id = req.params.id;
    try {
        await Event.findByIdAndDelete(id);
    } catch (error) {
        res.status(400).send("Error");
    }
})

module.exports = router;