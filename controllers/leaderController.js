const Leader = require("../models/Leader");

module.exports = {
  getAllLeaders: (req, res) => {
    Leader.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getAllLeadersFrom: (req, res) => {
    Leader.find({ city: req.params.city })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getOneLeader: (req, res) => {
    // console.log({ req });
    Leader.findOne();
    // LeaderCollection
    //   .findOne()
    //   .then((result) => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  },
  postOneLeader: (req, res) => {
    console.log("Add One Leader");
    const newLeader = new Leader(req.body);
    newLeader.save((err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        res.json(result);
      }
    });
  },
};
