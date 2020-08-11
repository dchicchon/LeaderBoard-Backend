const router = require("express").Router();
const leaderController = require("../controllers/leaderController");

router.get("/", leaderController.getAllLeaders);
router.get("/:city", leaderController.getAllLeadersFrom);
router.get("/:leaderId", leaderController.getOneLeader);
router.post("/", leaderController.postOneLeader);

module.exports = router;
