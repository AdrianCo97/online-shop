import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    productId: Number,
    email: String,
    firstname: String,
    comment: String
})

export default mongoose.Schema("Comment", commentSchema);