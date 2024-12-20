import mongoose from "mongoose";
import "dotenv/config";

const connectToDatabase = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error("Database connection failed");
  }
};

export default connectToDatabase;
