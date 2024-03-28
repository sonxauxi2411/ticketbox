const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user_id :{
        type : mongoose.Schema.ObjectId,
        ref : 'User', 
        required: true
    },
    username : {
        type : String,
        required : true
    },
    fullname: {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    event_id : {
        type : String,
        required : true
    },
    tickets : {
        type : Object, 
        required : true
    },
    total : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    status : {
        type :String,
        default : 'pending'
    },
    payment: {
        type :String,
        default : 'pending'
    }
})

const BookingModel = mongoose.model('Booking', BookingSchema);

module.exports = BookingModel;