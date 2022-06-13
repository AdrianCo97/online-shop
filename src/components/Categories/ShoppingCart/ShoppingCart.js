import { useState, useContext, useEffect } from "react";
import "../ShoppingCart/ShoppingCart.css";
import { CartContext } from "../../../contexts/CartContext.js";
import Navbar from "../../Navbar/Navbar.js";
import DeleteIcon from '@mui/icons-material/Delete';

function ShoppingCart() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;

    for (let i = 0; i < productsInCart.length; i++) {
      totalPrice += productsInCart[i].price;
    }

    totalPrice = Math.round(totalPrice);

    setTotalPrice(totalPrice);
  }, [totalPrice]);

  return (
    <div>
      <Navbar />
      <div className="header">
        <p>Total Price: {totalPrice} €</p>
        <button>Go to checkout</button>
      </div>
      <div className="productsinCart">
        {productsInCart.map((product, index) => {
          return (
            <div className="productinCart" key={index}>
              <img src={product.image}></img>
              <p className="product-title">{product.title}</p>
              <p className="product-price">{product.price} €</p>
              <DeleteIcon className="trashCan" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
