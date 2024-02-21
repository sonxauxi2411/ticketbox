
const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  quantity : {
    type: Number,
    required: true,
  }, 
   description : {
    type: String,
    required: true,
  },
  event_id :{
    type : mongoose.Schema.ObjectId,
    ref : 'Event', 
    required: true,
  }
  
});

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;