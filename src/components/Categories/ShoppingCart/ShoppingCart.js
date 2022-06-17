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
    determinePrice(productsInCart);
  }, []);

  const gatherAndGetAmountOfProducts = () => {
    let gatheredProducts = [...new Set(productsInCart)];

    let finalProductsArray = [];
    for (let i = 0; i < gatheredProducts.length; i++) {
      const itemCount = getAmountOfProducts(gatheredProducts[i]);
      finalProductsArray.push({
        product: gatheredProducts[i],
        count: itemCount,
      });
    }
    setProductsToRender(finalProductsArray);
  };

  const getAmountOfProducts = (value) => {
    let count = 0;
    productsInCart.forEach((v) => v === value && count++);
    return count;
  };

  const removeProduct = (product, indexToDelete) => {
    setProductsToRender([
      ...productsToRender.slice(0, indexToDelete),
      ...productsToRender.slice(indexToDelete + 1, productsToRender.length)
    ]);

    let array = productsInCart.filter((p) => {
      return p.id != product.product.id;
    });

    setProductsInCart(array);
    determinePrice(array);

    /*(products) =>
      products.filter((_, index) => index !== indexToDelete)
    console.log(productsToRender)
    */
  };

  const determinePrice = (array) => {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {
      totalPrice += array[i].price;
    }
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <Navbar />
      <div className="header">
        <p>Total Price: {totalPrice} €</p>
        <button>Go to checkout</button>
        <div className="info-box">
          <div className="info-box-left">
            <p className="product-title">Title</p>
          </div>
          <div className="info-box-right">
            <p className="product-count">Amount</p>
            <p className="product-price">Price</p>
          </div>
        </div>
      </div>
      <div className="productsinCart">
        {productsToRender.map((product, index) => {
          return (
            <div className="productinCart" key={index}>
              <p className="product-title">{product.product.title}</p>
              <div className="product-body-right">
                <div className="product-cart-info">
                  <p className="product-count">{product.count}</p>
                  <p className="product-price">{product.product.price} €</p>
                </div>
                <DeleteIcon
                  className="trashcan"
                  onClick={() => removeProduct(product, index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
