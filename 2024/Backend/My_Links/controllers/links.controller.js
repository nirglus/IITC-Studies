const { Link } = require("../models/link.model");

const getAllLinks = async (req ,res) =>{
    try {
        const query = req.query;
        const links = await Link.find({ ...query });
        res.send(links);
    } catch (error) {
        res.status(400).send("Error");
    }
};

const getOneLink =async (req, res) =>{
    const { id } = req.params;
    try {
        const link = await Link.findById(id);
        if(link) return res.send(link);
        res.send("Couldn't find link");
    } catch (error) {
        res.status(400).send(Error);
    }
};

const postLink = async (req ,res) =>{
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
};

const deleteLink = async (req, res)=>{
    const { id } = req.params;
    try {
        await Link.findByIdAndDelete(id);
        return res.send("Succesfully deleted link");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
};

const updateLink = async(req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const link = await Link.findByIdAndUpdate(id, body, {new: true});
        if(link) return res.send(link);
        return res.send("Link is not found");
    } catch (error) {
        res.status(400).send("Error");
    }
};

module.exports = { getAllLinks, getOneLink, postLink, updateLink, deleteLink};