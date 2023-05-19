const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error authenticating token:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
