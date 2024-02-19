const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: String, required: false},
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    role: {type: String, default: "user", required: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User", userSchema);

module.exports = { User };