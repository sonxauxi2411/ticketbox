import publicClient from "../client/public.client";

const authEndpoint = {
  register: "auth/register",
  login: "auth/login",
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
};

export default authApi;
