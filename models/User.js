const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: Number,
    default: true
  },
  about_me: {
    type: String,
    default: true
  },
  address: {
    type: String,
    default: true
  },
  gender: {
    type: Number,
    default: true
  }

});
module.exports = User = mongoose.model("users", UserSchema);