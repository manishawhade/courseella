import { SECRET_KEY } from "../config/index.js";
import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send({ message: "No token provided!" });
  }
  let token = authHeader.split(" ")[1];
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
