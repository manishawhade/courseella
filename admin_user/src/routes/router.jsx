import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import ErrorPage from "./error-page";
import CourseList from "../views/Course/CourseList";
import AddCourse from "../views/Course/AddCourse";
import EditCourse from "../views/Course/EditCourse";
import User from "../views/User";
import Report from "../views/Report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/course", element: <CourseList /> },
      { path: "/course/add", element: <AddCourse /> },
      { path: "/course/edit/:courseId", element: <EditCourse /> },
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
