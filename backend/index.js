const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.send("Technify Backend API is running");
});

// Route files (to be imported later)
// app.use("/api/users", require("./routes/userRoutes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});