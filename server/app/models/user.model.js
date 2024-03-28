
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  fullname :{
    type: String,
  },
  phone : {
    type : String ,
  },
  adress : {
    type : String,
  },
  password : {
    type: String,
    required: true,
  },
  isAdmin : {
    type : Boolean,
    default: false,
  }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;