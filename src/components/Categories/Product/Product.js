import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";
const jsonData = require("../../../data/products.json");

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    for(let i = 0; i < jsonData.length; i++) {
      if(jsonData[i].id == id){
        setProduct(jsonData[i]);
      } 
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="pageContent">
        <div className="header">
          <img src={product.image}></img>
          <p>{product.title}</p>
          <div className="footer">
            <h1 className="price">{product.price} €</h1>
            <button>Add to cart</button>
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
