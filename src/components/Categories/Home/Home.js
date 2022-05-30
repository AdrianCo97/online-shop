import {useEffect, useState} from "react";
import Navbar from "../../Navbar/Navbar.js"
import RenderArrayContent from "../Logic/RenderArrayContent.js";
import "./Home.css";

function Home(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
          console.log(data);
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
            <RenderArrayContent array={products} />
          </div>
        </div>
      </div>
      
    );
}

export default Home;