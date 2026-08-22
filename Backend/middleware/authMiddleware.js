const Jwt = require("jsonwebtoken");
const userModel = require("./../Models/authModel");
const googleModel = require("./../Models/googleModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json("Unauthorized");
    }

    const jsonToken = token.replace("Bearer", "").trim();

    let isVerified;
    try {
      isVerified = Jwt.verify(jsonToken, process.env.JWT_SECRET || "Hello");
    } catch (error) {
      try {
        isVerified = Jwt.verify(jsonToken, process.env.JWT_SECRET || "Rolex");
      } catch (error) {
        return res.status(401).json("Unauthorized: Invalid Token");
      }
    }

    const userData = await userModel.findOne({ email: isVerified.email }).select({ password: 0 });
    const userData2 = await googleModel.findOne({ email: isVerified.email });

    if (!userData && !userData2) {
      return res.status(404).json("User not found");
    }

    req.user = userData || userData2;
    req.token = token;
    req.userId = req.user._id;

    next();
  } catch (error) {
    console.error("authMiddleware", error.message);
    res.status(500).json("Internal server error");
  }
};

module.exports = authMiddleware;
