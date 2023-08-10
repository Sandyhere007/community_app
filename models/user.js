import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username :{
        type : String,
        required: true,
        unique : true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
   
    userType: {
        type: String,
        default: "user"
    }

})  

export const User = mongoose.model("userData", userSchema);