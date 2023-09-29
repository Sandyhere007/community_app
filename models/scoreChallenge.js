import mongoose from "mongoose";

const scoreSdeSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userData",
    },
    score : {
        type : Number,
        default: 0,
        max : [120],
        min:[0],
    },

})

export const Score = mongoose.model("sdeChallengeScore", scoreSdeSchema );