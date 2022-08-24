import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  productId: Number,
  byUser: { email: String, firstname: String },
  comments: [{
    comment: {String, required: true}
  }],
});

export default mongoose.model("Comment", commentSchema);
