const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Setting API Home Page");
  res.send(
    "Welcome to the Leaderboard API! Please navigate to the following paths: 1. /elected 2. /users"
  );
});

module.exports = router;
