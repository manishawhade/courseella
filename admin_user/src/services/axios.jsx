import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/admin",
});
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
