import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar.js";

function Clothes() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const getClothes = async () => {
      const menClothingResponse = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const womenClothingResponse = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );

      const mensClothes = await menClothingResponse.json();
      const womensClothing = await womenClothingResponse.json();

      setClothes(mensClothes);
      setClothes((clothes) => [...clothes, ...womensClothing]);
    };
    getClothes();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main-content">
        <h3>All products</h3>
        <div className="products">
          {clothes.map((clothes) => {
            return (
              <div className="product" key={clothes.id}>
                <img src={clothes.image}></img>
                <div className="product-info">
                  <p className="title">{clothes.title}</p>
                  <p className="price">{clothes.price} SEK</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clothes;
