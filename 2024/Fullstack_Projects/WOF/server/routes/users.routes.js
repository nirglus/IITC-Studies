const { Router } = require("express");
const { auth } = require("../middlewares/auth");
const { register, login, deleteUser, updateUser, getUser } = require("../controllers/users.controller");
const { createNewCart } = require("../controllers/carts.controller");

const router = Router();

router.post("/register", register, createNewCart);
router.post("/login", login);
router.get("/", auth, getUser)
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);


module.exports = router;
