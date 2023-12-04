import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/user",
});
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status == 401) {
      location.replace("/signin");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("email");
      localStorage.removeItem("token");
    } else {
      if (error.response.data) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
