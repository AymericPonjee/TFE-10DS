const mongoose = require("mongoose");
const constants = require("./../utils/constants");

const AnimeSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  // birthday: { type: Date, required: true },
  nationalNumber: { type: String, required: true },
  address: { type: String, required: true },
  mailParent: { type: String, required: true },
  numberParent: { type: String, required: true },
  section: {
    type: String,
    enum: constants.SECTIONS,
    required: true,
  },
  created: { type: Date, default: Date.now },
  state: {
    type: String,
    required: true,
    default: constants.ANIME_STATE[0],
    enum: constants.ANIME_STATE,
  },
});

module.exports = mongoose.model("Animes", AnimeSchema);
