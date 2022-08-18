import mongoose from "mongoose";

const shoppingCartSchema = mongoose.Schema(
  {
    createdBy: String,
    cartTitle: String,
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

export default mongoose.model("ShoppingCart", shoppingCartSchema);
