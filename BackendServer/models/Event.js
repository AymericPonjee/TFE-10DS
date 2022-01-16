const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  name: { type: String, required: true },
  beginAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  adress: { type: String, required: true },
  presence: { type: Number, required: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", EventSchema);
