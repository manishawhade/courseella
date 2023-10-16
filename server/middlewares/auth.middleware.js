import { SECRET_KEY } from "../config/index.js";
import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    req.user = decoded;
    next();
  });
};

export { verifyToken };
