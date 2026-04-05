const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// Load .env from backend folder regardless of where npm is run from
dotenv.config({ path: path.join(__dirname, ".env") });



const { chats } = require("./data/data");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json()); // To Except JSON Data

app.get("/", (req, res) => {
  res.send("API Working fine");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
