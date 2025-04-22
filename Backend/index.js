import dotenv from "dotenv";
import express from "express"; // Add this import
import connectDB from "./db/index.js";
import { app } from "./app.js";
import mongoose from "mongoose";
import path from "path";
import os from "os";

// Configure environment variables
dotenv.config({ path: "./.env" });

// Database event listeners
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Frontend static files
const __dirname = path.dirname("");
const frontendBP = path.join(__dirname, "../Frontend/dist");
app.use(express.static(frontendBP)); // Now this will work

// Server startup
const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at http://localhost:${process.env.PORT || 8000}/`);
    });
  } catch (err) {
    console.error("Server startup failed:", err);
    process.exit(1);
  }
};

startServer();