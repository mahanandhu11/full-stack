const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const postRoutes = require("./routes/postRoutes");

// Use Routes
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Micro Blog Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});