const {CategoryModel} = require('../models/index')
const responseHandler =  require('../handlers/response.handler')

exports.createCategory = async (req, res)=>{

    try {
        const {name} =  req.body;
        const newCategory = new CategoryModel ({
            display_name: name
        })

        await newCategory.save();
        responseHandler.created(res, {messgaes : 'success'});
    } catch (error) {
        console.error( error);
        responseHandler.error(res);
    }
}