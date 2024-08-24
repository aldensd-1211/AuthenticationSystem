const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth"); // Import the auth routes

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://aldendcunha1211:haVBW2yg6vHtpdRu@cluster-jwt.kccqo.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes); // Use the auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
