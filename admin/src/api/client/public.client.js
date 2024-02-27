import axios from "axios";

const baseURL = "http://localhost:3000/api";

const publicClient = axios.create({
  baseURL,
  withCredentials: true
});

publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    console.log(err)
    throw err.response.data;
  }
);

export default publicClient;
