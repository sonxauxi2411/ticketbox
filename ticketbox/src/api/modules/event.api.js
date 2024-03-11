import publicClient from "../client/public.client";

const eventEndpoint = {
  getEvent: ({ event_id }) => `/event/${event_id}`,
  getTopEvent : '/event/top-events' ,
  getFilterCate : ({categories}) => `/event/events?category=${categories.join(',')}`
};


const eventApi = {
    getEvent : async ({event_id})=>{
        try {
            const response = await publicClient.get(eventEndpoint.getEvent({event_id}));
            return response;
        } catch (error) {
            return {error}
        }
    },
    getTopEvent : async ()=>{
        try {
            const response = await publicClient.get(eventEndpoint.getTopEvent)
            return response
        } catch (error) {
            return {error}
        }
    },

    getFilterCate : async ({categories})=>{
        try {
            console.log(categories)
            const response = await publicClient.get(eventEndpoint.getFilterCate({categories}))
            return response
        } catch (error) {
            return {error}
        }
    }
}



export default eventApi;