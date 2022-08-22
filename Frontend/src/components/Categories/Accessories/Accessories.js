import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";
import RenderArrayContent from "../Logic/RenderArrayContent.js";
const jsonData = require("../../../data/products.json");

function Accessories() {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const jeweleryArray = [];
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].category === "jewelery") {
        jeweleryArray.push(jsonData[i]);
      }
    }
    setJewelery(jeweleryArray);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main-content">
        <h3>Electronics</h3>
        <div className="products">
          <RenderArrayContent array={jewelery} />
        </div>
      </div>
    </div>
  );
}

export default Accessories;
