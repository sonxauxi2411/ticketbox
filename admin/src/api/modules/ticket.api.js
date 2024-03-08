import privateClient from "../client/private.client";

const ticketEndpoint = {
    allTicket : 'ticket/all',
    createTicket : 'ticket/create'
};

const ticketApi = {
    allTicket : async ()=>{

        try {
            const response = await privateClient.get(ticketEndpoint.allTicket);
            return response;
        } catch (error) {
            return {error}
        }
    },
    createTicket : async ({ name, price, desc , quantity, event_id})=>{
        try {
            const response = await privateClient.post(ticketEndpoint.createTicket, {name, price, desc, quantity, event_id});
            return response
        } catch (error) {
            return {error}
        }
    }
};

export default ticketApi;
