import publicClient from "../client/public.client";


const locationEndpoint = {
    getAll : '/location/all',
    create : '/location/create'
}


const locationApi = {

    getAll : async ()=>{
        try {
            const response = await publicClient.get(locationEndpoint.getAll);
            return response;
        } catch (error) {
            return {error}
        }
    },
    create : async ({name, city, adress})=>{
        try {
            const response = await publicClient.post(locationEndpoint.create,{name, city, adress})
            return response
        } catch (error) {
            return {error}
        }
    }
}

export default locationApi;