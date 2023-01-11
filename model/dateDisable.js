const mongoose = require("mongoose");

const dateSchema = mongoose.Schema({
    Location:{
        type:String
    },
    dates:[
        {
            startTime: String,
            endTime: String,
            date: Date
        }
    ]
        
});

const Date = mongoose.model("testDate", dateSchema);

module.exports = Date;
