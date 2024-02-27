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
      console.log("========", response);
    } catch (error) {
      console.log("error", error);
    }
  },
  login: async ({ email, password }) => {
    try {
      const response = await publicClient.post(authEndpoint.login, {
        email: email,
        password:password,
        isAdminPage : true,
      });
      return response
    } catch (error) {
      return error
    }
  },
};

export default authApi;
