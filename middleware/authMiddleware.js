const User = require("../models/User");

const protect = async (req, res, next) => {
  const userId = req.headers["x-user-id"];

  if (!userId) {
    return res.status(401).json({ success: false, message: "Authentication required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid user" });
    }

    req.userId = user._id;
    req.userRole = user.role;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const admin = (req, res, next) => {
  if (req.userRole !== "admin") {
    return res.status(403).json({ success: false, message: "Admin access required" });
  }

  next();
};

module.exports = {
  protect,
  admin
};
