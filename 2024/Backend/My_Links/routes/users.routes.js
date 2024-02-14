const { Router } = require("express");
const { User } = require("../models/user.model");
const { register, login, updateUser, deleteUser } = require("../controllers/users.controller");
const router = Router();

router.post("/register", register);

router.post("/login", login);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);


module.exports = router;
