import { React, useState, Fragment } from "react";
import Home from "./components/Categories/Home/Home.js";
import Clothes from "./components/Categories/Clothes/Clothes.js";
import Electronics from "./components/Categories/Electronics/Electronics.js";
import Accessories from "./components/Categories/Accessories/Accessories.js";
import Product from "./components/Categories/Product/Product.js";
import CartContext from "./contexts/CartContext.js";
import NavBar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function WebsiteRoutes() {
  const [productsInCart, setProductsInCart] = useState(0);
  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home values={{productsInCart, setProductsInCart}}/>} />
          <Route path="/clothes" element={<Clothes values={{productsInCart, setProductsInCart}} />} />
          <Route path="/electronics" element={<Electronics values={{productsInCart, setProductsInCart}} />} />
          <Route path="/accessories" element={<Accessories values={{productsInCart, setProductsInCart}} />} />
          <Route path="/product/:id" element={<Product values={productsInCart} />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default WebsiteRoutes;
