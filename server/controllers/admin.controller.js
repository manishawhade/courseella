import { Admin, Course } from "../database/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/index.js";
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existinguser = await Admin.findOne({ email: email });
    if (existinguser) {
      return res.status(400).json({ message: "User already exists" });
    }
    var hashPassword = bcrypt.hashSync(password, 10);
    const result = await Admin.create({
      email: email,
      password: hashPassword,
    });
    const token = jwt.sign(
      {
        email: email,
        id: result._id,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(201).json({
      message: "Admin created successfully",
      user: result,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existinguser = await Admin.findOne({ email: email });
    if (!existinguser) {
      return res.status(403).json({ message: "User not found" });
    }
    let matchpassword = bcrypt.compare(password, existinguser.password);
    if (!matchpassword) {
      return res.status(403).josn({ message: "Invalid Credentials" });
    }
    const token = jwt.sign(
      {
        email: email,
        id: existinguser._id,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      message: "Login successful",
      user: result,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const getCourseDetails = async (req, res) => {
  Course.findById(req.params.courseId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};
const getCourses = async (req, res) => {
  Course.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};
const addCourse = async (req, res) => {
  const course = new Course(req.body);
  course
    .save()
    .then(() => {
      res.status(200).json({ message: `Course added successfully.` });
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

const updateCourse = (req, res) => {
  Course.findByIdAndUpdate(req.params.courseId, req.body)
    .then(() => {
      res.status(200).json({ message: `Course updated successfully.` });
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

const deleteCourse = (req, res) => {
  Course.findByIdAndDelete(req.params.courseId)
    .then(() => {
      res.status(200).json({ message: `Product deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

export {
  signUp,
  signIn,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseDetails,
  getCourses,
};
