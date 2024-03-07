import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const eventEndpoint = {
  getEvent: ({ event_id }) => `/event/${event_id}`,
  allEvent: "/event/all",
  createEvent: "/event/create",
  deleteEvent: "/event/delete",
};

const eventApi = {
  getEvent: async ({ event_id }) => {
    try {
      const response = await publicClient.get(
        eventEndpoint.getEvent({ event_id })
      );
      return response;
    } catch (error) {
      return { error };
    }
  },
  allEvent: async () => {
    try {
      const response = await privateClient.get(eventEndpoint.allEvent);
      console.log(response);
      return response;
    } catch (error) {
      return { error };
    }
  },

  createEvent: async (data) => {
    try {
      const response = await privateClient.post(
        eventEndpoint.createEvent,
        data
      );
      return response;
    } catch (error) {
      return { error };
    }
  },
  deleteEvent: async ({ids}) => {
    try {
      const response = await privateClient.post(eventEndpoint.deleteEvent, {
        ids,
      });
      return response;
    } catch (error) {
      return { error };
    }
  },
};

export default eventApi;
