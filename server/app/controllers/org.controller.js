const responseHandler =  require('../handlers/response.handler')
const {OrgModel} = require('../models/index')

exports.createOrg = async (req, res)=>{

    try {
        const { name, img, decs } = req.body;
        const newOrg = new OrgModel({
            display_name: name,
            img: img,
            date_create: new Date(),
            description: decs
        })
        await newOrg.save();
        return    responseHandler.created(res, { message: 'created org successfully'})
    } catch (error) {
        console.error( error);
        responseHandler.error(res);
    }
}