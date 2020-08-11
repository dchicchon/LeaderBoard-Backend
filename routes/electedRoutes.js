const router = require("express").Router();
const electedController = require("../controllers/electedController");

router.get("/", electedController.getAllElected);
router.get("/:city", electedController.getAllElectedFrom);
router.get("/:electedId", electedController.getOneElected);
router.post("/", electedController.postOneElected);

module.exports = router;
