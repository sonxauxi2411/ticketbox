import publicClient from "../client/public.client";

const authEndpoint = {
  register: "auth/register",
  login: "auth/login",
  updateProfile : "auth/update-profile"
};

const authApi = {
  register: async ({ username, email, password }) => {
    try {
      const response = await publicClient.post(authEndpoint.register, {
        username,
        email,
        password,
      });
      return response
    } catch (error) {
      console.log("error", error);
      return error
    }
  },
  login: async ({ email, password }) => {
    try {
      const response = await publicClient.post(authEndpoint.login, {
        email: email,
        password:password,
      });
      return response
    } catch (error) {
     return error
    }
  },
  updateProfile : async ({user_id, username, fullname, phone , adress })=>{
    try {
      const response = await publicClient.post(authEndpoint.updateProfile, {
        user_id,
        username,
        fullname,
        phone ,
        adress,
      });
      return response
    } catch (error) {
      return error
    }
  }
};

export default authApi;
