import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
  email: String,
  password: String,
});

const userSchema = new Schema({
  email: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: String,
  image: String,
  published: String,
});

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Course = mongoose.model("Course", courseSchema);

export { Admin, User, Course };
