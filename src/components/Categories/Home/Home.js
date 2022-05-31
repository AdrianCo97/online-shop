import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import RenderArrayContent from "../Logic/RenderArrayContent.js";
import CircularProgress from "@mui/material/CircularProgress";
import "../../../Styling/Styling.css";
const jsonData = require("../../../data/products.json");

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(jsonData);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h3>All products</h3>
        <div className="products">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <RenderArrayContent array={products} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
