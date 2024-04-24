import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectToDB.js";

dotenv.config();

const app = express();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  connectDB();
});
