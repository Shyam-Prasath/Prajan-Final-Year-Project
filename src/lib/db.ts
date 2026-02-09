import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_DB_URI!;

if (!MONGO_URI) {
    throw new Error("MONGO_DB_URI is missing");
}

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect(MONGO_URI);
};
