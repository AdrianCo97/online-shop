import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import "./app.css";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data));
    console.log(products);
  }, [])

  return (
    <body>
      <Navbar />
      <div class="main-content">
        <h3>What's popular</h3>
        <div class="products">
        {
          products.map(product => {
            return (
              <div class="product" key={product.id}>
                  <img src={product.image}></img>
                  <p class="title">{product.title}</p>
                  <p>{product.price} SEK</p>
              </div>     
            )
          })
        }
        </div>
      </div>
    </body>
    
  );
}

export default App;
