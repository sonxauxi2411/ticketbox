
const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
  },
  adress:{
    type: Number,
    required: true,
  }
 
});

const LocationModel = mongoose.model("Location", LocationSchema);

module.exports = LocationModel;