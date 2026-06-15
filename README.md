# E-Commerce Backend API

A simple E-Commerce Backend built with Node.js, Express.js, MongoDB, and Mongoose. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing products through RESTful APIs while following the MVC architecture pattern.

## Features

* Create a Product
* Get All Products
* Get Product by ID
* Update a Product
* Delete a Product
* MongoDB Database Integration
* MVC Architecture
* RESTful API Design
* Environment Variable Configuration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* Dotenv

## Project Structure

```text
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
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd ecommerce-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## Product Schema

```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number
}
```

## API Endpoints

### Create Product

```http
POST /api/products
```

Request Body:

```json
{
  "name": "iPhone 15",
  "description": "Apple Smartphone",
  "price": 80000,
  "category": "Electronics",
  "stock": 20
}
```

### Get All Products

```http
GET /api/products
```

### Get Product By ID

```http
GET /api/products/:id
```

### Update Product

```http
PUT /api/products/:id
```

Request Body:

```json
{
  "name": "iPhone 15 Pro",
  "price": 90000
}
```

### Delete Product

```http
DELETE /api/products/:id
```

## Sample Responses

### Success Response

```json
{
  "success": true,
  "data": {
    "name": "iPhone 15",
    "price": 80000
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Product not found"
}
```

## Testing

The API can be tested using:

* Postman
* Thunder Client
* Insomnia
* <img width="1200" height="948" alt="image" src="https://github.com/user-attachments/assets/0ef977de-c035-43d5-bf42-4a997c84b418" />
<img width="1338" height="927" alt="image" src="https://github.com/user-attachments/assets/44870941-4ddf-40a1-8357-24fdf7994bc9" />



## Learning Outcomes

This project helps in understanding:

* Express.js Routing
* MongoDB Integration
* Mongoose Models
* CRUD Operations
* REST APIs
* MVC Architecture
* Environment Variables

## Future Improvements

* User Authentication with JWT
* Role-Based Authorization
* Shopping Cart Functionality
* Order Management
* Payment Gateway Integration
* Product Search and Filtering
* Image Upload Support

## Author

Developed as a learning project to understand backend development using the MERN stack.
