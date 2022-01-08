const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  mail: { type: String, unique: true, required: true },
  totem: { type: String, required: false, default: " " },
  quali: { type: String, required: false, default: " " },
  password: { type: String, required: true },
  chef: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);