const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getOneUser);
router.post("/", userController.addOneUser);

module.exports = router;
