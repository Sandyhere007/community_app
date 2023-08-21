import mongoose from "mongoose";
const linksSchema = mongoose.Schema({
    username:{
        type: String,
        ref : "User",
    },
    title : {
        type : String,
        required:[true,"Please enter a Title"],
        },
    url :{
        type :String,
        unique : [true , "These Link already Exists"],
    },
    createdOn : {
        type : Date,
        default : new Date(),
    }
});

export const Links = mongoose.model("linksofwebsites",linksSchema) ;