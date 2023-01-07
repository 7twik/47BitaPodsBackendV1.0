const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  head:{
    type:String
  },
  body:{
    type:String
  },
  date:{
    type: Date,
  },
  image:{
    type: String
  },
  author:{
    type: String
  },
},
  { timestamps: true }
);

const Blog = mongoose.model("testBlog", blogSchema);

module.exports = Blog;
