import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  productId: Number,
  byUser: { email: String, firstname: String },
  comment: {type: String, required: true}
});

export default mongoose.model("Comment", commentSchema);
