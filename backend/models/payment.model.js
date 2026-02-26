import mongoose, { model,Schema } from "mongoose"

const paymentSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    planId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,

    },
    credits: {
        type: Number,
        required: true,
        default: 100

    },
    razorpayOrderId: {
        type: String,
        required: true

    },
    razorpayPaymentId: {
        type: String,
        required: true

    },
    status: {
        type: String,
        enum: ["Created", "Paid", "failed"],
        default: "Created"
    }




}, { timestamps: true })


const Paymnet = model("Payment", paymentSchema)
export default Paymnet