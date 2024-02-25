const responseHandler = require("../handlers/response.handler");
const { EventModel, TicketModel } = require("../models/index");

exports.createTicket = async (req, res) => {
  try {
    const { name, price, desc, quantity, event_id } = req.body;
    const event = await EventModel.findById(event_id);
    if (!event)
      return responseHandler.badrequest(res, { message: "Not fount event" });
    const newTicket = new TicketModel({
      display_name: name,
      price: price,
      description: desc,
      quantity: quantity,
      event_id: event_id,
    });
    await newTicket.save();
    responseHandler.created(res, { message: "created ticket successfully" });
  } catch (error) {
    console.error(error);
    responseHandler.error(res);
  }
};
