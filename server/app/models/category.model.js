
const mongoose = require("mongoose");

const CategorySchema =  new mongoose.Schema({
    display_name: {
        type: String,
        required: true,
      },
    
      
})


const  CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel ;