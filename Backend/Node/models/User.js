import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    firstname: String, 
    lastname: String,
    email: String, 
    password: String,
})

export default mongoose.model("User", userSchema);