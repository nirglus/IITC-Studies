const { app } = require("./app");
const mongoose = require("mongoose");

const mongoUrl = 'mongodb://localhost:27017/event-planner';

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Connected to db");
    }).catch(error =>{
        console.log(error);
    })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
