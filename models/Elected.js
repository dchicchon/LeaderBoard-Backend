const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electedSchema = new Schema({
  name: { type: String, required: true },
  website: String,
  city: { type: String, required: true },
  district: String,
  image: String,
  candidate: { type: Boolean, required: true },
});

module.exports = mongoose.model("Elected", electedSchema);
