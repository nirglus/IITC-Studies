const { Router } = require("express");
const { Link } = require("../models/link.model");
const { getAllLinks, getOneLink, postLink, updateLink, deleteLink } = require("../controllers/links.controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.get("/", getAllLinks);

router.get("/:id", getOneLink)

router.post("/", auth, postLink);

router.patch("/:id", updateLink);

router.delete("/:id", deleteLink);

module.exports = router;