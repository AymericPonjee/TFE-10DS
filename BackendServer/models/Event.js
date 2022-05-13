const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const SECTIONS = [
  "Baladins",
  "Mowha",
  "Seeonee",
  "Éclaireurs",
  "Pionniers",
  "Chefs",
];

const EventSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  beginAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  section: {
    type: [{type: String, enum: SECTIONS}],
    required: true,
  },
  comment: { type: String, required: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Events", EventSchema);
