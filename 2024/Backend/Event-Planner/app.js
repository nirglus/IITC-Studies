const express = require("express");
const eventsRouter = require("./routes/events.routes");
const usersRouter = require("./routes/users.routes");


const app = express();
app.use(express.json());

app.use("/event-planner/events", eventsRouter);
app.use("/event-planner/users", usersRouter);

module.exports = { app }