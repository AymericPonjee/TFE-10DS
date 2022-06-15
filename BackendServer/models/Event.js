const mongoose = require("mongoose");
const constants = require("../utils/constants");
const Anime = require("./Anime");

const EventSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  beginAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  section: {
    type: [{ type: String, enum: constants.SECTIONS }],
    required: true,
  },
  comment: { type: String, required: false },
  created: { type: Date, default: Date.now },
  participants: {
    type: [String],
    required: true,
    default: []
  },
});

module.exports = mongoose.model("Events", EventSchema);
