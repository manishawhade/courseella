import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { adminState } from "../store/atoms/admin";
// import dotenv from "dotenv"

// dotenv.config()
// const {token} = useRecoilValue(adminState)

const instance = axios.create({
  baseURL: "http://localhost:3000/admin",
});

// console.log("axios=> ",process.env.BASE_URL);
console.log("axios=> ",localStorage.getItem("token"));
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
