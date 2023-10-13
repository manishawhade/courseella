import mongoose from "mongoose";
import { MONGODB_URL } from "../config/index.js";

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Mongodb connection failed Error => ", err);
  });
