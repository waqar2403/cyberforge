// server/app.js
require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const ErrorHandler = require('./utils/ErrorHandler');
const cors = require("cors");
// Add this import at the top
const fileUpload = require('express-fileupload');
const errorhandlermiddleware=require("./middleware/error")

// Add this middleware before your routes
app.use(fileUpload({
  useTempFiles: true
}));

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" })); // Required for form submissions
app.use(cookieParser())
app.use(cors({
  origin: `${process.env.FRONTEND_URL}`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// Sample route
app.get('/', (req, res) => {
  res.send('API is running..');
});

const user = require("./controller/userController");
const shop=require("./controller/shopController")

const coupon = require("./controller/couponController");
const product=require("./controller/productController")
const event=require("./controller/eventController")
const conversation=require("./controller/conversationController")
const payment=require("./controller/paymentController")
const order=require("./controller/orderController")
const message=require("./controller/messagesController")
const withdraw=require("./controller/withdrawController")

app.use("/api/v2/user", user);
app.use("/api/v2/event", event);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/payment", payment);
app.use("/api/v2/order", order);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/withdraw", withdraw);
app.use("/api/v2/coupon", coupon);
app.use(errorhandlermiddleware)

module.exports = app; // Ensure the app is exported correctly
