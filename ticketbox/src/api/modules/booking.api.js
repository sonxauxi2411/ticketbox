import publicClient from "../client/public.client";

const bookingEndpoint = {
  getEvent: ({ event_id }) => `ticket/event/${event_id}`,
  createBooking : 'booking/create' ,
  getBookings : ({user_id}) => `booking/user/${user_id}` ,
 
};


const bookingApi = {
    getTicket : async ({event_id})=>{
        try {
            const response = await publicClient.get(bookingEndpoint.getEvent({event_id}));
            return response;
        } catch (error) {
            return {error}
        }
    },

    createBooking : async ({event_id, tickets , fullname, email, phone, username, total, _id})=>{
        try {
            
            const response = await publicClient.post(bookingEndpoint.createBooking, {event_id, tickets , fullname, email, phone,total, username, user_id: _id});
            return response
        } catch (error) {
            return {error}
        }
    },
    getBookingUser : async ({user_id}) =>{
        try {
            const response = await publicClient.get(bookingEndpoint.getBookings({user_id}));
            return response
        } catch (error) {
            return {error}
        }
    }
   
}



export default bookingApi;