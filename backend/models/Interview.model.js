import mongoose, { model, Schema } from "mongoose";


const questionsScehma = new Schema({
    question: String,
    difficulty: String,
    timeLimit: Number,
    answer: String,
    feedback: String,
    score: { type: Number, default: 0 },
    confidence: { type: Number, default: 0 },
    communication: { type: Number, default: 0 },
    correctness: { type: Number, default: 0 },

})


const interviewSchema = new Schema({


    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    role: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true

    },

    mode: {
        type: String,
        required: true,
        enum: ["Hr", "Technical"],
    },
    questions: [questionsScehma],

    finalScore: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
    resumeText: String


}, { timestamps: true })



const Interview = model("Interview", interviewSchema)

export default Interview