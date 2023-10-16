import { atom } from "recoil";

const adminState = atom({
  key: "adminState",
  default: {
    email: localStorage.getItem("email"),
    username: localStorage.getItem("email") ? localStorage.getItem("email").split("@")[0].toLocaleUpperCase() : "",
    isLoggedIn: localStorage.getItem("isLoggedIn"),
  },
});

export { adminState };
