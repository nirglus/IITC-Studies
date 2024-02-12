const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    title:{type: String, required: true},
    link:{type: String, required: true},
    description:{type: String, required: true},
    userID: {type: String}
});

const Link = mongoose.model("Link", linkSchema);

module.exports = {Link};