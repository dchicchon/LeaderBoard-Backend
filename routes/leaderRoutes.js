const router = require("express").Router();
const leaderController = require("../controllers/leaderController");

// GET Routes
router.get("/", leaderController.getAllLeaders);
router.get("/:city", leaderController.getAllLeadersFrom);
router.get("/:leaderId", leaderController.getOneLeader);

// POST Routes
router.post("/", leaderController.postOneLeader);

module.exports = router;
