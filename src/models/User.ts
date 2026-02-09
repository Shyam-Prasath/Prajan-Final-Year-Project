import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String, // only for credentials users
        image: String,
        provider: String, // google | github | credentials
        },
    { timestamps: true }
);

export const User = models.User || mongoose.model("User", UserSchema);
