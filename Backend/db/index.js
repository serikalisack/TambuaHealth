import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Remove deprecated options and fix connection string
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`.replace(/([^:]\/)\/+/g, "$1"), // Remove duplicate slashes
      {
        serverSelectionTimeoutMS: 5000,
      }
    );
    
    console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    console.log(`Database Name: ${connectionInstance.connection.name}`);
    
    return connectionInstance;
  } catch (error) {
    console.error("MONGODB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;