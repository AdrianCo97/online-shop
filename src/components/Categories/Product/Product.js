import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Navbar from "../../Navbar/Navbar.js";
import "./product.css";

function Product() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
      return response.json();
    }).then((data) => {
      setProduct(data);
    })
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="pageContent">
        <p>{product.title}</p>
      </div>
    </div>
  );
}

export default Product;
