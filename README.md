E-Commerce Backend API

A simple E-Commerce Backend built with Node.js, Express.js, MongoDB, and Mongoose. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing products using a RESTful API and follows the MVC architecture pattern.

🚀 Features
Create a Product
Get All Products
Get Product by ID
Update a Product
Delete a Product
MongoDB Database Integration
MVC Architecture
RESTful API Design
Environment Variable Configuration
🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
Nodemon
Dotenv
📂 Project Structure
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── productController.js
│
├── models/
│   └── Product.js
│
├── routes/
│   └── productRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
📦 Installation
1. Clone the Repository
git clone <repository-url>
cd ecommerce-backend
2. Install Dependencies
npm install
3. Create Environment Variables

Create a .env file in the root directory.

PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Start the Server

Development Mode:

npm run dev

Production Mode:

npm start

Server will run on:

http://localhost:5000
🗄️ Product Schema
{
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number
}
📡 API Endpoints
Create Product
POST /api/products

Request Body:

{
  "name": "iPhone 15",
  "description": "Apple Smartphone",
  "price": 80000,
  "category": "Electronics",
  "stock": 20
}
Get All Products
GET /api/products
Get Product By ID
GET /api/products/:id
Update Product
PUT /api/products/:id

Request Body:

{
  "name": "iPhone 15 Pro",
  "price": 90000
}
Delete Product
DELETE /api/products/:id
📋 Sample Response
Success Response
{
  "success": true,
  "data": {
    "name": "iPhone 15",
    "price": 80000
  }
}
Error Response
{
  "success": false,
  "message": "Product not found"
}
🧪 Testing

You can test all endpoints using:

Postman
Thunder Client
Insomnia
🎯 Learning Outcomes

This project helps in understanding:

Express.js Routing
MongoDB Integration
Mongoose Models
CRUD Operations
REST APIs
MVC Architecture
Environment Variables
🔮 Future Enhancements
User Authentication (JWT)
Role-Based Authorization
Shopping Cart
Order Management
Payment Gateway Integration
Product Search & Filtering
Image Uploads
