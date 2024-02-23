const responseHandler =  require('../handlers/response.handler')
const {LocationModel} = require('../models/index')

exports.createLocation = async (req, res)=>{

    try {
        const {name, adress, city} =  req.body;
        const newLocation = new LocationModel ({
            display_name: name, 
            adress: adress,
            city: city
        })

        await newLocation.save();
        responseHandler.created(res, {messgaes : 'success'});
    } catch (error) {
        console.error( error);
        responseHandler.error(res);
    }
} 