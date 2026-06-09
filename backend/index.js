require('dotenv').config();
const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db');
const dns = require('node:dns/promises');

const app = express();
const PORT = process.env.PORT || 5000;

dns.setServers(["1.1.1.1", "8.8.8.8"]);


// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.send("Technify Backend API is running");
});

// Route files
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});