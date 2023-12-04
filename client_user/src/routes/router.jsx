import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import CourseList from "../views/CourseList";
import Purchasedcourse from "../views/Purchasedcourse";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/course", element: <CourseList /> },
      { path: "/purchasedcourse", element: <Purchasedcourse /> },
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
