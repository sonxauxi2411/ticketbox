import publicClient from "../client/public.client";

const orgEndpoint = {
  getAllOrg: "/org/all",
  createOrg: "/org/create",
  deleteOrg : "/org/delete",
};

const orgApi = {
  getAllOrg: async () => {
    try {
      const response = await publicClient.get(orgEndpoint.getAllOrg);
      return response;
    } catch (error) {
      return { error };
    }
  },
  createOrg: async ({ name, img, desc }) => {
    try {
      const response = await publicClient.post(orgEndpoint.createOrg, {name, img, desc});
      return response;
    } catch (error) {
      return { error };
    }
  },
  deleteOrg : async ({ids}) =>{
  try {
    console.log(ids)
    const response = await publicClient.post(orgEndpoint.deleteOrg, {ids})
    return response
  } catch (error) {
    return { error }
  }
  }
};

export default orgApi;
