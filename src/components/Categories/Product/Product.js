import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";
import {CartContext} from "../../../contexts/CartContext.js";
const jsonData = require("../../../data/products.json");
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const {productsInCart, setProductsInCart} = useContext(CartContext);


  useEffect(() => {
    for(let i = 0; i < jsonData.length; i++) {
      if(jsonData[i].id == id){
        setProduct(jsonData[i]);
      } 
    }
  }, [id]);

  const addToCartFunction = () => {
    setProductsInCart(productsInCart + 1);
  }
  

  return (
    <div>
      <Navbar />
      <div className="pageContent">
        <div className="header">
          <p>Products in cart: {productsInCart}</p>
          <img src={product.image}></img>
          <p>{product.title}</p>
          <div className="footer">
            <h1 className="price">{product.price} €</h1>
            <button onClick={addToCartFunction}>Add to cart</button>
          </div>
        </div>

        <div className="productInfo">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
