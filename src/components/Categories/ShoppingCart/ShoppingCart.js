import { useState, useContext } from "react";
import "../ShoppingCart/ShoppingCart.css";
import { CartContext } from "../../../contexts/CartContext.js";
import Navbar from "../../Navbar/Navbar.js";

function ShoppingCart() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      {productsInCart.map((product) => {
        return (
          <div className="productinCart" key={product.id}>
            <p>{product.title}</p>
            <p>{product.price} €</p>
          </div>
        );
      })}

      <button>Go to checkout</button>
    </div>
  );
}

export default ShoppingCart;
