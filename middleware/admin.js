const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized." });
  }
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    if (!req.user.isAdmin) {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid." });
  }
  next();
};
