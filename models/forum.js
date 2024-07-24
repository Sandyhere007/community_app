import mongoose from "mongoose";
import { User } from "./user.js";

const forumSchema = new mongoose.Schema({
    message :{
        type : String,
        required: [true, "Please Enter the message" ]
    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "userData",
        required: [true, "User not found" ]
    },
    createdAt :{
        type : Date,
        default : Date.now(),
    },
},{
        timestamps : true,
    });

export const Forum = mongoose.model("forumData", forumSchema);