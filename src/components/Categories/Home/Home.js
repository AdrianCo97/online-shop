import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import RenderArrayContent from "../Logic/RenderArrayContent.js";
import "../../../Styling/Styling.css";
import { ContactlessOutlined } from "@mui/icons-material";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      return response.json();
    }).then((data) => {
      setProducts(data);
    })
  }, []);

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
