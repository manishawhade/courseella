import mongoose from "mongoose";

mongoose
  .connect(config.url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Mongodb connection failed Error => ", err);
  });
