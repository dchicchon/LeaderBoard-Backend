const Elected = require("../models/Elected");
// const mongoose = require("mongoose");
// const db = mongoose.connection;
// const electedCollection = db.collection("elected-officials");

module.exports = {
  getAllElected: (req, res) => {
    Elected.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
    // electedCollection
    //   .find()
    //   .toArray()
    //   .then((results) => {
    //     res.json(results);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },

  getAllElectedFrom: (req, res) => {
    console.log(req.params);
    res.send("Returning all elected");
  },

  getOneElected: (req, res) => {
    // console.log({ req });
    Elected.findOne();
    // electedCollection
    //   .findOne()
    //   .then((result) => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },
  postOneElected: (req, res) => {
    console.log("Add One Elected");
    const newElected = new Elected(req.body);
    newElected.save((err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        res.json(result);
      }
    });
  },
};
