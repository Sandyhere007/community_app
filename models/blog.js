import mongoose from "mongoose";
import { User } from "./user.js";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Summary"],
    },
    summary: {
        type: String,
        required: [true, "Please Enter Summary"]
    },
    category:{
        type :String ,  default:"All"

    },
    blogImage: {
        type: String,
        required: [true, "Please Select an Image"]
    },
    content: {
        type: String,
        required: [true, "Please Enter BLog Content"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userData',
    },
}, {
    timestamps: true,
});
export const Blog = mongoose.model("blogs", blogSchema);