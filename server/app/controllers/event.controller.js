const responseHandler = require("../handlers/response.handler");
const {
  EventModel,
  OrgModel,
  LocationModel,
  TicketModel,
  CategoryModel,
} = require("../models/index");

exports.getEvent = async (req, res) => {
  try {
    const event_id = req.params.eventId;
    const event = await EventModel.findById(event_id);
    if (!event)
      return responseHandler.badrequest(res, { message: "Not fount event" });

    const org = await OrgModel.findById(event.org_id);
    const location = await LocationModel.findById(event.location_id);
    const tickets = await TicketModel.find({ event_id: event._id });

    const data = {
      id: event._id,
      display_name: event.display_name,
      category: event.category,
      org: org,
      location: location,
      date_time_start: event.start_date_time,
      background: event.background,
      tickets: tickets,
    };

    console.log(data);
    responseHandler.ok(res, data);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

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
    console.log(req.body);
    const newEvent = new EventModel({
      display_name: name,
      category,
      org_id,
      location_id,
      start_date_time: start_date,
      end_date_time: end_date,
      background,
      description,
    });

    await newEvent.save();
    responseHandler.created(res, { message: "success" });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

exports.getAllEvent = async (req, res) => {
  try {
    const allEvent = await EventModel.find({});

    const data = await Promise.all(
      allEvent.map(async (event) => {
        const org = await OrgModel.findById(event.org_id);
        const location = await LocationModel.findById(event.location_id);

        const { org_id, location_id, ...rest } = event._doc;
        const results = { ...rest, org: org, location: location };
        return results;
      })
    );

    return responseHandler.ok(res, data);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { ids } = req.body;
    console.log(req.body);
    const result = await EventModel.deleteMany({ _id: { $in: ids } });
    if (result.deletedCount > 0) {
      responseHandler.ok(res, { message: "Event deleted successfully" });
    } else {
      responseHandler.badrequest(res, {
        message: "No Event found with the provided IDs",
      });
    }
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { data, event_id } = req.body;
    const {
      name,
      category,
      org_id,
      location_id,
      start_date,
      end_date,
      background,
      description,
    } = data;
    const event = await EventModel.findById(event_id);
    if(!event) return responseHandler.badrequest(res, {
      message: "No Event found with the provided IDs",
    });
    event.display_name = name;
    event.category = category;
    event.org_id = org_id;
    event.location_id = location_id;
    event.start_date_time = start_date;
    event.end_date_time = end_date;
    event.background = background;
    event.description = description;
    await event.save()
    responseHandler.ok(res, { message: "Event updated successfully" });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
