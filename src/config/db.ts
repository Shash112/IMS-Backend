import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL || "");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error:any) {
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
};

export default connectDB;