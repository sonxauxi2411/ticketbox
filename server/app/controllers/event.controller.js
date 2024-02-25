const responseHandler = require("../handlers/response.handler");
const {EventModel, OrgModel, LocationModel, TicketModel} = require('../models/index')


exports.getEvent = async  (req, res) =>{
  try {

    const event_id = req.params.eventId
    const event = await EventModel.findById(event_id)
    if (!event) return responseHandler.badrequest(res, {message : "Not fount event"})

    const org = await OrgModel.findById(event.org_id)
    const location = await LocationModel.findById(event.location_id)
    const tickets = await TicketModel.find({event_id : event._id})

    const data = {
      id : event._id,
      display_name : event.display_name,
      category : event.category,
      org : org,
      location : location,
      date_time_start : event.start_date_time,
      background: event.background,
      tickets: tickets
    }

    console.log(data)
    responseHandler.ok(res, data)
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}

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
