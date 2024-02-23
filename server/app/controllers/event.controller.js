const responseHandler = require("../handlers/response.handler");
const {EventModel} = require('../models/index')

exports.creatEvent = async (req, res) => {
  try {
    const {
      name,
      category,
      org_id,
      location_id,
      start_date,
      end_date,
      background,
      description,
    } = req.body;

    const newEvent = new EventModel({
        display_name : name, 
        category, 
        org_id,
        location_id,
        start_date_time: start_date,
        end_date_time: end_date,
        background,
        description
    } )

    await newEvent.save();
    responseHandler.created(res, {message : 'success'});
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
