const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postImage: String,
  discription: String,
  location: String,
  active: Boolean, 
});

const Post = mongoose.model("Post", postSchema);


modele.exports = Post;