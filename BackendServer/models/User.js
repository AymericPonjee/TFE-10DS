const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  mail: { type: String, required: true },
  totem: { type: String, required: false },
  quali: { type: String, required: false },
  password: { type: String, required: true },
  chef: { type: Boolean, required: true, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);