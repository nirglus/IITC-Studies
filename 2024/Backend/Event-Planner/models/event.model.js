const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    id: {type: String, required: false},
    title: { type: String, required: true},
    description: {type: String, required: false},
    date: {type: Date, required: true, default: new Date()}
});

const Event = mongoose.model("Event", eventSchema);
module.exports = { Event };