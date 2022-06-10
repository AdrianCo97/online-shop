import { React, useState} from "react";
import Home from "./components/Categories/Home/Home.js";
import Clothes from "./components/Categories/Clothes/Clothes.js";
import Electronics from "./components/Categories/Electronics/Electronics.js";
import Accessories from "./components/Categories/Accessories/Accessories.js";
import Product from "./components/Categories/Product/Product.js";
import {CartContext} from "./contexts/CartContext.js"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function WebsiteRoutes() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/accessories" element={<Accessories/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default WebsiteRoutes;
