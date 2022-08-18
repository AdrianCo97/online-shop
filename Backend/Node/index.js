import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes.js";
import cartRoutes from "./routes/cart-routes.js";

const app = express();
const port = 5000;

dotenv.config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri).then(console.log("Connected"));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => console.log("listening on port " + port));
