const { User } = require("../models/user.model");
const bcrypt = require("bcryptjs");

const register = async (req ,res) =>{
    try {
        const {email, password, fullName} = req.body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = new User({email, password: hash, fullName});
        newUser.id = newUser._id;
        await newUser.save();
        res.send({message: "User saved successfully!", data: newUser});
    } catch (error) {
        res.status(400).send("Error");
    }
};

const updateUser = async(req, res) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, body, {new: true});
        if(user) return res.send(user);
        return res.send("User is not found");
    } catch (error) {
        res.status(400).send("Error");
    }
};

const login = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const checkUser = await User.findOne({email});
        if(checkUser){
             const isMatch = await bcrypt.compare(password, checkUser.password);
             if(isMatch) return res.send(checkUser);
                    }
        res.status(401).send("Email or password are incorrect");
    } catch (error) {
        res.status(400).send("Error");
    }
};


const deleteUser = async (req, res)=>{
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        return res.send("Succesfully deleted user");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
};

module.exports = { register, login, updateUser, deleteUser}