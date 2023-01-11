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

const Datee = mongoose.model("testDate", dateSchema);

module.exports = Datee;
