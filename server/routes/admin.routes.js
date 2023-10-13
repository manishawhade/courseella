import express from "express";
import {
  signUp,
  signIn,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseDetails,
  getCourses,
} from "../controllers/admin.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/courses/:courseId", verifyToken, getCourseDetails);
router.get("/courses", verifyToken, getCourses);
router.post("/courses", verifyToken, addCourse);
router.put("/courses/:courseId", verifyToken, updateCourse);
router.delete("/courses/:courseId", verifyToken, deleteCourse);

export default router;
