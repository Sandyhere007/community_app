import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone : {
        type : Number,
        required : true,
    },
    email: {
        type: String,
        unique: true,
        lowercase:true,

        
    },
        password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:'user',
        }
})

export const User = mongoose.model("userData", userSchema);