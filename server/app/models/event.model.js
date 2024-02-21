
const mongoose = require("mongoose");

const EventSchema =  new mongoose.Schema({
    display_name: {
        type: String,
        required: true,
      },
    category :{
        type: String,
        required: true,
    },
    org_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'Organization', 
        required: true,
    },
    location_id :{
        type : mongoose.Schema.ObjectId,
        ref : 'Location', 
        required: true,
    },
    start_date_time: {
        type: Date,
        required: true,
      },
    end_date_time: {
        type: Date,
        required: true,
      },
    background: {
        type: String,
        required: true,
      },
    description : {
        type: String,
        required: true,
    }
      
})


const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;