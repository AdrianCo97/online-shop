import { useState, useContext, useEffect } from "react";
import "../ShoppingCart/ShoppingCart.css";
import { CartContext } from "../../../contexts/CartContext.js";
import Navbar from "../../Navbar/Navbar.js";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClickAwayListener } from "@mui/material";

function ShoppingCart() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const [productsToRender, setProductsToRender] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    gatherAndGetAmountOfProducts();

  }, [])

  const gatherAndGetAmountOfProducts = () => {
    let gatheredProducts = [...new Set(productsInCart)];
    
    let finalProductsArray = [];
    for(let i = 0; i < gatheredProducts.length; i++){
      const itemCount = getAmountOfProducts(gatheredProducts[i]);
      finalProductsArray.push({product:gatheredProducts[i], count:itemCount});
    }           
    setProductsToRender(finalProductsArray);
  }

  const getAmountOfProducts = (value) => {
    let count = 0;
    productsInCart.forEach(v => v === value && count++);
    return count;
  }

  const removeProduct = (product, indexToDelete) => {
    setProductsToRender(products => products.filter((_,index) => index !== indexToDelete));
    setProductsInCart(productsInCart.filter(p => p.id !== product.product.id))
  };

  const determinePrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      totalPrice += productsInCart[i].price;
    }

    totalPrice = Math.round(totalPrice);

    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <Navbar />
      <div className="header">
        <p>Total Price: {totalPrice} €</p>
        <button>Go to checkout</button>
        <div className="info-box">
          <p>Title</p>
          <p>Amount</p>
          <p>Price</p>
        </div>
      </div>
      <div className="productsinCart">
        {productsToRender.map((product, index) => {
          return (
            <div className="productinCart" key={index}>
              <img src={product.product.image}></img>
              <p className="product-title">{product.product.title}</p>
              <p>{product.count}</p>
              <p className="product-price">{product.product.price} €</p>
              <div className="trashcan" onClick={() => removeProduct(product, index)}>
                <DeleteIcon className="trashcan" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
