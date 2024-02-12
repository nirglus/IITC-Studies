const express = require("express");
const usersRouter = require("./routes/users.routes");
const linksRouter = require("./routes/links.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/my-links/users", usersRouter);
app.use("/my-links/links", linksRouter);

module.exports = { app }