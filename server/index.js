import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./database/index.js";
import adminRouter from "./routes/admin.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Courseella API");
});

app.use("/admin", adminRouter);
app.use("/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
