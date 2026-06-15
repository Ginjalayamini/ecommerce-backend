const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

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

// Mount product routes under /api/products.
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
