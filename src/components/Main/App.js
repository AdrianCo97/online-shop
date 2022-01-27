import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import "./app.css";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h3>What's popular</h3>
        <div className="products">
        {
          products.map(product => {
            return (
              <div className="product" key={product.id}>
                <img src={product.image}></img>
                <div className="product-info">
                  <p className="title">{product.title}</p>
                  <p className="price">{product.price} SEK</p>
                </div>
              </div>     
            )
          })
        }
        </div>
      </div>
    </div>
    
  );
}

export default App;
