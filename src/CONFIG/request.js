import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

request.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
    }

    return Promise.reject(error);
  }
);

export { request };
