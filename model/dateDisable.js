const mongoose = require("mongoose");

const dateSchema = mongoose.Schema({
    Location:{
        type:String
    },
    dates:{
        type:Array
    }    
});

const Date = mongoose.model("testDate", dateSchema);

module.exports = Date;
