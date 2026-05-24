import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const axiosClient = axios.create({
  baseURL,
  timeout: 10000,
});

export const axiosPrivateClient = axios.create({
  baseURL,
  timeout: 2500,
  withCredentials: true,
});

export default axiosClient;
