const mongoose = require("mongoose")

const userSchema = new mongoose.postSchema ({

postImage : String,
description : String,
location : String,
active : Boolean

})

const Post = mongoose.model("post", postSchema)

module.exports = Post