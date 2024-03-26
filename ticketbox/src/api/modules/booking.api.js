import publicClient from "../client/public.client";

const bookingEndpoint = {
  getEvent: ({ event_id }) => `ticket/event/${event_id}`,
 
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
   
}



export default bookingApi;