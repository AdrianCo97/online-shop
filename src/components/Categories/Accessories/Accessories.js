import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import RenderArrayContent from "../Logic/RenderArrayContent.js";

function Accessories() {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    async function getAccessories() {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const jewelery = await response.json();
      setJewelery(jewelery);
    }
    getAccessories();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main-content">
        <div className="products">
          <RenderArrayContent array={jewelery}/>
        </div>
      </div>

    </div>
  );
}

export default Accessories;
