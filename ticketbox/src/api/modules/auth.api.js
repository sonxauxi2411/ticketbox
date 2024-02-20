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
    console.log("===login=", email, password);
    try {
      const response = await publicClient.post(authEndpoint.login, {
        email: email,
        password:password,
      });
      console.log("========", response);
    } catch (error) {
      console.log("=====error===", error);
    }
  },
};

export default authApi;
