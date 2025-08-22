
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userprofile: String,
  fullname: String,0
  username: String,
  active: String,
  mobilenumber: Number,
  email: String,
});

const user = mongoose.model("user", postSchema);

modele.exports = user;
