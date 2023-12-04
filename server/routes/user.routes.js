import express from "express";
import {
  signUp,
  signIn,
  getCourses,
  getPurchasedCourses,
  pusrchaseNewCourse,
  removepusrchasedcourse,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/courses", verifyToken, getCourses);
router.get("/fetchpurchasedcourses", verifyToken, getPurchasedCourses);
router.get("/purchasenewcourse/:courseId", verifyToken, pusrchaseNewCourse);
router.delete(
  "/removepusrchasedcourse/:courseId",
  verifyToken,
  removepusrchasedcourse
);

export default router;
