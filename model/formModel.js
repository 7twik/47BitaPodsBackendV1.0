const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  Name:{
    type:String
  },
  Email:{
    type:String
  },
  Number:{
    type: Number,
  },
  No:{
    type: Number
  },
  Location:{
    type: String
  },
  Days:{
    type: Number
  },
  Date:{
    type: Date
  },
},
  { timestamps: true }
);

const Form = mongoose.model("testForm", formSchema);

module.exports = Form;
