const router = require("express").Router();
const indexRoutes = require("./indexRoutes");
const leaderRoutes = require("./leaderRoutes");
const userRoutes = require("./userRoutes");

router.use("/", indexRoutes);
router.use("/leaders", leaderRoutes);
router.use("/users", userRoutes);

module.exports = router;
