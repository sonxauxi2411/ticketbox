import publicClient from "../client/public.client";

const eventEndpoint = {
  getEvent: ({ event_id }) => `/event/${event_id}`,
};


const eventApi = {
    getEvent : async ({event_id})=>{
        try {
            const response = await publicClient.get(eventEndpoint.getEvent({event_id}));
            return response;
        } catch (error) {
            return {error}
        }
    }
}

export default eventApi;