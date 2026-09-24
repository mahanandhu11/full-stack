const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Todo App Backend is Running");
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await mongoose.connection.db
      .collection("todos")
      .find()
      .toArray();

    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});