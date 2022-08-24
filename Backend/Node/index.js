import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import cartRoutes from "./routes/cart-routes.js";
import commentRoutes from "./routes/comment-routes.js";
import cors from "cors";

const app = express();
const port = 5000;

dotenv.config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri).then(console.log("Connected"));

app.use(cors("http://localhost:3000"))
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/comments", commentRoutes);

app.listen(port, () => console.log("listening on port " + port));