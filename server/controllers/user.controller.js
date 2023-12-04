import { User, Course } from "../database/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/index.js";

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    let existinguser = await User.findOne({ email: email });
    if (existinguser) {
      return res.status(400).json({ message: "User already exists" });
    }
    var hashPassword = bcrypt.hashSync(password, 10);
    const result = await User.create({
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
      message: "User created successfully",
      // user: result,
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
    let existinguser = await User.findOne({ email: email });
    if (!existinguser) {
      return res.status(403).json({ message: "User not found" });
    }
    let matchpassword = bcrypt.compareSync(password, existinguser.password);
    if (!matchpassword) {
      return res.status(403).json({ message: "Invalid Credentials" });
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
      // user: existinguser,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
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

const pusrchaseNewCourse = (req, res) => {
  Course.findById(req.params.courseId)
    .then((result) => {
      User.findById(req.user.id)
        .then((user) => {
          if (user.purchasedCourses) {
            if (
              user.purchasedCourses.filter((x) => x == req.params.courseId)
                .length > 0
            ) {
              return res
                .status(400)
                .json({ message: "Course already purchased." });
            } else {
              User.findByIdAndUpdate(
                req.user.id,
                { $push: { purchasedCourses: result._id } },
                { new: true }
              )
                .then(() => {
                  res
                    .status(200)
                    .json({ message: `Course pusrchased successfully.` });
                })
                .catch((err) => {
                  res.status(500).json({ message: `Something went wrong` });
                });
            }
          }
        })
        .catch((err) => {
          res.status(500).json({ message: `Something went wrong` });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

const getPurchasedCourses = async (req, res) => {
  User.findById({ _id: req.user.id })
    .populate("purchasedCourses")
    .then((result) => {
      res.status(200).json(result.purchasedCourses);
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

const removepusrchasedcourse = (req, res) => {
  Course.findById(req.params.courseId)
    .then((result) => {
      User.findByIdAndUpdate(
        req.user.id,
        { $pull: { purchasedCourses: result._id } },
        { new: true }
      )
        .then(() => {
          res.status(200).json({ message: `Course deleted successfully.` });
        })
        .catch((err) => {
          res.status(500).json({ message: `Something went wrong` });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: `Something went wrong` });
    });
};

export {
  signUp,
  signIn,
  getCourses,
  getPurchasedCourses,
  pusrchaseNewCourse,
  removepusrchasedcourse,
};
