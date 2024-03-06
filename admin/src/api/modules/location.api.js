import privateClient from "../client/private.client";
import publicClient from "../client/public.client";


const locationEndpoint = {
    getAll : '/location/all',
    create : '/location/create' ,
    delete: '/location/delete' ,
}


const locationApi = {

    getAll : async ()=>{
        try {
            const response = await privateClient.get(locationEndpoint.getAll);
            return response;
        } catch (error) {
            return {error}
        }
    },
    create : async ({name, city, adress})=>{
        try {
            const response = await privateClient.post(locationEndpoint.create,{name, city, adress})
            return response
        } catch (error) {
            return {error}
        }
    },
    delete : async ({ids})=>{
        try {
            const response = await privateClient.post(locationEndpoint.delete, {ids})
            return response
        } catch (error) {
            return {error}
        }
    }
}

export default locationApi;