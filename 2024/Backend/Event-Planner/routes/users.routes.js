const {Router} = require("express");
const { User } = require("../models/user.model")
const router = Router();

router.post("/register", async (req, res) =>{
    const body = req.body;
    try {
        const newUser = new User(body);
        await newUser.save();
        res.send({message: "User saved successfully!", data: newUser});
    } catch (error) {
        res.status(400).send("Error");
    }
})

router.post("/login", async (req, res) =>{
    const body = req.body;
    try {
        const isCorrectUser = await User.findOne({email: body.email, password: body.password});
        if(isCorrectUser){
            res.send({message: "Logged in succesfully", data: isCorrectUser.fullName});
        } else{
            res.send({message: "Wrong email or password", data: null});
        }
    } catch (error) {
        res.status(400).send("Error");
    }
})

module.exports = router;