const router = require("express").Router();
const indexRoutes = require("./indexRoutes");
const electedRoutes = require("./electedRoutes");
const userRoutes = require("./userRoutes");

router.use("/", indexRoutes);
router.use("/elected", electedRoutes);
router.use("/users", userRoutes);

module.exports = router;
