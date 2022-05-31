import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="pageContent">
        <div className="header">
          <img src={product.image}></img>
          <p>{product.title}</p>
          <h1 className="price">{product.price} €</h1>
          <button>Add to cart</button>
        </div>

        <div className="productInfo">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
