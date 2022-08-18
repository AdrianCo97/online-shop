import mongoose from "mongoose";
import express from "express";

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

mongoose.connect(
  `mongodb+srv://${username}:${password}@online-shop-cluster.qaxjrbx.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    try {
      console.log("Connected to database.");
    } catch (e) {
      console.log(e.message);
    }
  }
);
const app = express();
const port = 5000;

app.listen(port, () => console.log("listening on port " + port));
