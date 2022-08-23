import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";
import { CartContext } from "../../../contexts/CartContext.js";
const jsonData = require("../../../data/products.json");
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  useEffect(() => {
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].id == id) {
        setProduct(jsonData[i]);
      }
    }
  }, [id]);

  const addToCartFunction = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  return (
    <div>
      <Navbar />
      <div className="product-page-body">
        <div className="product-page-header">
          <img src={product.image}></img>
          <p>{product.title}</p>
          <div className="product-page-footer">
            <h1 className="product-page-price">{product.price} €</h1>

            <button onClick={() => addToCartFunction(product)}>
              Add to cart
            </button>
          </div>
        </div>

        <div className="product-page-info">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
