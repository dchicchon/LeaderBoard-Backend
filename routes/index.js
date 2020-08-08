const router = require("express").Router();
const electedRoutes = require("./electedRoutes");
const userRoutes = require("./userRoutes");

router.use("/elected", electedRoutes);
router.use("/users", userRoutes);

module.exports = router;
