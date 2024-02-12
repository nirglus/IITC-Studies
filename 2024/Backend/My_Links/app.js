const express = require("express");
const usersRouter = require("./routes/users.routes");
const linksRouter = require("./routes/links.routes");

const app = express();
app.use(express.json());

app.use("/my-links/users", usersRouter);
app.use("/my-links/links", linksRouter);

module.exports = { app }