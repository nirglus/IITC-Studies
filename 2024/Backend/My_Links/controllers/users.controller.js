const { User } = require("../models/user.model");

const register = async (req ,res) =>{
    const body = req.body;
    try {
        const newUser = new User(body);
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
    const body = req.body;
    try {
        const checkUser = await User.findOne({email: body.email, password: body.password})
        if(checkUser){
            res.send({message: "Logged in succesfully", data: checkUser.fullName});
        } else{
            res.send({message: "Wrong email or password", data: null});
        }
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