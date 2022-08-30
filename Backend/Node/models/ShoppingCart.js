import mongoose from "mongoose";
import Product from "../models/Product.js";

const shoppingCartSchema = mongoose.Schema(
  {
    email: {type: String, required: true},
    cartTitle: {type: String, required: true},
    products: [{
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        image: String,
        rating: {rate: Number, count: Number}
    }],
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

export default mongoose.model("ShoppingCart", shoppingCartSchema);
