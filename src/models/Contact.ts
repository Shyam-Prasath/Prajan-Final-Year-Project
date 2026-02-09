import mongoose, { Schema, models } from "mongoose";

const ContactSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        role: String,
        purpose: String,
        contactTime: String,
    },
    { timestamps: true }
);

export const Contact =
    models.Contact || mongoose.model("Contact", ContactSchema);