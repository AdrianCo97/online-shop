import {useEffect, useState} from "react";
import Navbar from "../../Navbar/Navbar.js"
import "./Home.css";

function Home(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          console.log(data);
          setProducts(data);
        }
        catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [])
  
    return (
      <div>
        <Navbar />
        <div className="main-content">
          <h3>All products</h3>
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

export default Home;