import privateClient from "../client/private.client";

const orgEndpoint = {
  getAllOrg: "/org/all",
  createOrg: "/org/create",
  deleteOrg : "/org/delete",
};

const orgApi = {
  getAllOrg: async () => {
    try {
      const response = await privateClient.get(orgEndpoint.getAllOrg);
      return response;
    } catch (error) {
      return { error };
    }
  },
  createOrg: async ({ name, img, desc }) => {
    try {
      const response = await privateClient.post(orgEndpoint.createOrg, {name, img, desc});
      return response;
    } catch (error) {
      return { error };
    }
  },
  deleteOrg : async ({ids}) =>{
  try {
    console.log(ids)
    const response = await privateClient.post(orgEndpoint.deleteOrg, {ids})
    return response
  } catch (error) {
    return { error }
  }
  }
};

export default orgApi;
