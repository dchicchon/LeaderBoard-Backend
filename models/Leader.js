const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  name: { type: String, required: true },
  website: String,
  city: { type: String, required: true },
  district: String,
  image: String,
  elected: { type: Boolean, required: true },
});

module.exports = mongoose.model("Leader", leaderSchema);
