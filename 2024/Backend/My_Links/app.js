const express = require("express");
const usersRouter = require("./routes/users.routes");

const app = express();
app.use(express.json());
app.use("/my-links/users", usersRouter);

module.exports = { app }