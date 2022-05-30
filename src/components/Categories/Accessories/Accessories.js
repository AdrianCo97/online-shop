import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";

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
    </div>
  );
}

export default Accessories;
