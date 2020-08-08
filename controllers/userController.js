const mongoose = require("mongoose");
const db = mongoose.connection;
const userCollection = db.collection("users");

module.exports = {
  getAllUsers: (req, res) => {
    userCollection
      .find()
      .toArray()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getOneUser: (req, res) => {
    console.log({ req });
    userCollection
      .findOne()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  addOneUser: (req, res) => {
    console.log({ req });
    userCollection
      .insertOne(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
