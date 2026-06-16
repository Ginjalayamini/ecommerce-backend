const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Load environment variables from .env before using PORT or MONGO_URI.
dotenv.config();

// Connect to MongoDB.
connectDB();

const app = express();

// Parse incoming JSON request bodies.
app.use(express.json());

// Simple health route to confirm that the API is running.
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-Commerce Backend API is running"
  });
});

// Mount API route modules.
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
