const { Router } = require("express");
const { Link } = require("../models/link.model");
const router = Router();

router.get("/", async (req ,res) =>{
    try {
        const links = await Link.find({});
        res.send(links);
    } catch (error) {
        res.status(400).send("Error");
    }
});

router.post("/", async (req ,res) =>{
    const body = req.body;
    try {
        const newLink = new Link(body);
        newLink.id = newLink._id;
        await newLink.save();
        res.send({message: "Link saved successfully!", data: newLink});
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
});

router.patch("/:id", async(req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const link = await Link.findByIdAndUpdate(id, body, {new: true});
        if(link) return res.send(link);
        return res.send("Link is not found");
    } catch (error) {
        res.status(400).send("Error");
    }
});

router.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        await Link.findByIdAndDelete(id);
        return res.send("Succesfully deleted link");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
});



module.exports = router;