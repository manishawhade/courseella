import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    email: localStorage.getItem("email"),
    username: localStorage.getItem("email")
      ? localStorage.getItem("email").split("@")[0].toLocaleUpperCase()
      : "",
    isLoggedIn: localStorage.getItem("isLoggedIn"),
    token: localStorage.getItem("token"),
  },
});

export { userState };
