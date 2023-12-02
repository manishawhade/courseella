import axios from "axios";

const instance = axios.create({
  baseURL: "https://courseella-api.onrender.com/admin",
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
    }
    return Promise.reject(error);
  }
);

export default instance;
