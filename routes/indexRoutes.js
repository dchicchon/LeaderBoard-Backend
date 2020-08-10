const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Setting API Home Page");
  let message = ```Welcome to the Leaderboard API! Please navigate to the following paths:
  1. /elected
  2. /users```;
  res.send(message);
});

module.exports = router;
