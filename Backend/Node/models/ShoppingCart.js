import mongoose from "mongoose";

const ShoppingCartSchema = mongoose.Schema(
  {
    createdBy: String,
    products: [
      {
        productId: Number,
        title: String,
        price: String,
      },
    ],
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

export default new mongoose.model("ShoppingCart", ShoppingCartSchema);
