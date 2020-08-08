const router = require("express").Router();
const mongoose = require("mongoose");
const db = mongoose.connection;
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getOneUser);
router.post("/", userController.addOneUser);

module.exports = router;
