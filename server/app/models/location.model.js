
const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
  },
  adress:{
    type: String,
    required: true,
  },
  city : {
    type: String,
    required: true,
  }
 
});

const LocationModel = mongoose.model("Location", LocationSchema);

module.exports = LocationModel;