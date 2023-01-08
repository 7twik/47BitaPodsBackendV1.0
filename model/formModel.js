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
  startDate:{
    type: String
  },
  endDate:{
    type: String
  },
  startTime:{
    type: String
  },
  endTime:{
    type: String
  },
},
  { timestamps: true }
);

const Form = mongoose.model("testForm", formSchema);

module.exports = Form;
