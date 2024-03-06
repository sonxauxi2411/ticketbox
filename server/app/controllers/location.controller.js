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

exports.getAllLocation = async (req, res)=>{
    try {
        const allLocation = await LocationModel.find({})
        return responseHandler.ok(res, allLocation);
    } catch (error) {
        console.error( error);
        responseHandler.error(res);
    }
}

exports.deleteLocation = async (req, res)=>{
    try {
        const {ids} = req.body;
        console.log(ids);
        const result = await LocationModel.deleteMany({ _id: { $in: ids } });
        if (result.deletedCount > 0) {
          responseHandler.ok(res, {message :  'Location deleted successfully'});
        } else {
          responseHandler.badrequest(res, {message : 'No Location found with the provided IDs'});
        }
      } catch (error) {
        console.error(error);
        responseHandler.error(res);
      }
}