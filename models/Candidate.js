const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name: String,
  website: String,
  city: String,
  district: String,
  image: String,
});

module.exports = mongoose.model("Candidate", candidateSchema);
