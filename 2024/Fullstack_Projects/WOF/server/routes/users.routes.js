const { Router } = require("express");
const { register, login, deleteUser, updateUser } = require("../controllers/users.controller");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);


module.exports = router;
