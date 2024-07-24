import mongoose from 'mongoose';

const sdeSheetsSchema = new mongoose.Schema({
    question :{
        type : String,
        required : true,
    },
    link: {
        type : String,
        required : true,
    }
})