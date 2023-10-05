import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Courseella API");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at port ${port}.`);
});
