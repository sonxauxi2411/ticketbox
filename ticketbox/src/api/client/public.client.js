import axios from "axios";

const url = `${import.meta.env.VITE_URL_SERVER}/api`
const baseURL = url;

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
    throw err.response.data;
  }
);

export default publicClient;
