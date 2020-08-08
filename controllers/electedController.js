const mongoose = require("mongoose");
const db = mongoose.connection;
const electedCollection = db.collection("elected-officials");

module.exports = {
  getAllElected: (req, res) => {
    electedCollection
      .find()
      .toArray()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getOneElected: (req, res) => {
    console.log({ req });
    electedCollection
      .findOne()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  postOneElected: (req, res) => {
    console.log("Add One Elected");
    electedCollection
      .insertOne(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
