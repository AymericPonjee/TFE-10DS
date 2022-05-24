const mongoose = require("mongoose");

const ShopSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: Image, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Shop", ShopSchema);
