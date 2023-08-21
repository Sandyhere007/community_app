import mongoose from "mongoose";

const challengeSchema = mongoose.Schema({
    created: {
        type: Date,
        default: new Date(Date.now()),
        unique: true,
    },
    progress:{
        type: Number,
        default: 0,
        max : [100],
        min:[0],
    },
    question1: {
        questionText: { type: String, required: true },
        tags: [{ type: String }],
        link1: { type: String },
        link2: { type: String },
        isComplete: { type: Boolean, default: false }
    },
    question2: {
        questionText: { type: String, required: true },
        tags: [{ type: String }],
        link1: { type: String },
        link2: { type: String },
        isComplete: { type: Boolean, default: false }
    },
    question3: {
        questionText: { type: String, required: true },
        tags: [{ type: String }],
        link1: { type: String },
        link2: { type: String },
        isComplete: { type: Boolean, default: false }
    },
    question4: {
        questionText: { type: String, required: true },
        tags: [{ type: String }],
        link1: { type: String },
        link2: { type: String },
        isComplete: { type: Boolean, default: false }
    }
});

export const Challenge = mongoose.model("sdeChallenge1", challengeSchema);