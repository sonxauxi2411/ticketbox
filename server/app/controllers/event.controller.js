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
      description: event.description,
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
    // console.log(req.body);
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


exports.topEvent = async (req, res)=>{
  try {
    //sport event stage Workshop 
    const categories = ['Sport', 'Event', 'Stage', 'Workshop'];
    const eventsPerCategory = 5;

    const eventsByCategory = await Promise.all(categories.map(async (category) => {
      const events = await EventModel.find({ category: { $in: [category] } })
        .sort({ start_date_time: 1 })
        .limit(eventsPerCategory);
    
      const results = await Promise.all(events.map(async (e) => {
        const org = await OrgModel.findById(e.org_id);
        return { background: e.background, _id: e._id, display_name: e.display_name, org: org.display_name, start_date: e.start_date_time };
      }));
    
      return { cate: category, data: results };
    }));

  responseHandler.ok(res, eventsByCategory);
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}


exports.getFilterEventsByCategory = async (req,res)=>{

  try {
    const {category,page, show} = req.query
    const pageNum = parseInt(page) || 1;
    const showNum = parseInt(show) || 6; 

    const skipEvents = (pageNum - 1) * showNum;
    const categories = category.split(',')
    console.log(skipEvents);
    const regexCategories = categories.map(cat => new RegExp(cat, 'i'));
    const filteredEvents = await EventModel.find({ category: { $in: regexCategories } }).skip(skipEvents)
      .limit(showNum);

    const totalEvents = await EventModel.countDocuments({ category: { $in: regexCategories } });
    const totalPages = Math.ceil(totalEvents / showNum);

    const results = await Promise.all(filteredEvents.map(async (e) => {
      const org = await OrgModel.findById(e.org_id);
      return { background: e.background, _id: e._id, display_name: e.display_name, org: org.display_name, start_date: e.start_date_time };
    }));
    return responseHandler.ok(res, {page : pageNum, show : showNum, results : results, totalPages : totalPages});
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
}