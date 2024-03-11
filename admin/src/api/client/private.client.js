import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:8080/api";

const privateClient = axios.create({
  baseURL,
  withCredentials: true
});

privateClient.interceptors.request.use(async (config) => {
    console.log(Cookies.get('jwt'))
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      "token" : `Bearer ${Cookies.get('jwt')}`
    },
  };
});

privateClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    console.log(err)
    throw err.response.data;
  }
);

export default privateClient;
