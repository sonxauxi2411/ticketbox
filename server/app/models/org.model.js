
const mongoose = require("mongoose");

const OrgSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true,
  },
  date_create:{
    type: String,
    required: true,
  },
  img : {
    type: String,
    required: true,
  }, 
   description : {
    type: String,
    required: true,
  }
});

const OrgModel = mongoose.model("Organizational", OrgSchema);

module.exports = OrgModel;