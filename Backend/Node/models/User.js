import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    firstname: String, 
    lastname: String,
    email: String, 
    passworc: String,
})

export default mongoose.model("User", userSchema);