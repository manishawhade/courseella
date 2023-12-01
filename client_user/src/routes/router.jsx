import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
