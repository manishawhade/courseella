import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import ErrorPage from "./error-page";
import Course from "../views/Course";
import User from "../views/User";
import Report from "../views/Report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Course /> },
      { path: "/user", element: <User /> },
      { path: "/report", element: <Report /> },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
