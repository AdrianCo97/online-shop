import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";
import { CartContext } from "../../../contexts/CartContext.js";
import { Button } from "@mui/material";
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
      <div className="product-page">
        <div className="product-page-product-body">
          <div className="product-page-product-header">
            <h2 className="product-page-product-title">{product.title}</h2>
          </div>
          <img className="product-page-product-image" src={product.image} />
          <div className="product-page-product-footer">
            <h1 className="product-page-product-price">{product.price} €</h1>

            <Button
              variant="contained"
              sx={{ width: 300 }}
              onClick={() => addToCartFunction(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="product-page-specifics">
          <div className="product-page-specifics-description-box">
            <div className="product-page-specifics-description-box-header">
              <h2 className="product-page-specifics-description-box-title">Description</h2>
            </div>
            <div className="product-page-specifics-description-box-text">
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
