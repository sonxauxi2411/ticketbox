const responseHandler = require("../handlers/response.handler");
const { BookingModel, TicketModel, EventModel, LocationModel } = require("../models/index");

exports.createBooking = async (req, res, next) => {
    try {
      const { event_id, tickets, fullname, email, phone, username, total, user_id } = req.body;
  
      //check quantity ticket 
      const processTickets = async (tickets) => {

        const ticketPromises = Object.keys(tickets).map(async (ticketId) => {
          const ticket = await TicketModel.findById(ticketId);
          if (ticket) {
            ticket.quantity -= tickets[ticketId].quantity;
            await ticket.save();
          }
          return ticket;
        });
        const ticketDetails = await Promise.all(ticketPromises);
        return ticketDetails;
      };
  
      await processTickets(tickets);
  
      
      const newBooking = new BookingModel({
        event_id,
        tickets, 
        fullname,
        email,
        phone,
        username,
        total ,
        user_id
      });
      await newBooking.save();
  
      responseHandler.created(res, newBooking);
    } catch (error) {
      console.error(error);
      responseHandler.error(res);
    }
  };


exports.getBookingByUser = async (req, res, next) => {
    try {
        
        const { userId } = req.params;
        const bookings = await BookingModel.find({user_id : userId});
        const data = []
        for (const booking of bookings) {
            const event = await EventModel.findById(booking.event_id);
            const location = await LocationModel.findById(event.location_id);
            data.push({
              id : booking._id,
              event : {
                display_name : event.display_name,
                start_date : event.start_date_time,
                adress : location ,
                img : event.background,
              },
              tickets: booking.tickets,
              status : booking.status
            });
          }

          return responseHandler.ok (res , data)
    } catch (error) {
        console.error(error);
      responseHandler.error(res);
    }
}